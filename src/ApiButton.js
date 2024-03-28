// ApiButton.js
//import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import React, { useEffect, useState } from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
    config: {
        connectionString: 'InstrumentationKey=7ad782dd-9403-4ff6-ac91-eb50370ccbe1;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/',
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: { history: browserHistory }
        } ,
        //enableCorsCorrelation: true,
        enableRequestHeaderTracking: true,
        enableResponseHeaderTracking: true,
    }
});
appInsights.loadAppInsights();
appInsights.addTelemetryInitializer(envelope => {
    envelope.tags["ai.cloud.role"] = "DonkeyWeb";
    envelope.tags["ai.cloud.roleInstance"] = "DonkeyWeb"
});



function ApiButton () {

    const [apiResult, setApiResult] = useState(null); 
    

    const fetchData = async () => {
        const traceparent = `00-${generateRandomHex(16)}-${generateRandomHex(8)}-01`;
                
         const url = 'https://api.hakabo.com/arc/dev/v1/Something/DoSomething'; // Replace with your API endpoint
        const headers = {
            'Ocp-Apim-Subscription-Key': 'c2d941651361491f95f71aecf591e3e0',
            'traceparent': traceparent
        };
        appInsights.startTrackPage(url);
        try {
            const startTime = Date.now();
            const response = await fetch(url, {mode:'cors', method: 'GET', headers });
            //const traceparent = response.headers.get('traceparent');
            const endTime = Date.now();
            const duration = endTime - startTime;

            appInsights.trackDependencyData({
                id: "FetchData",
                target: url,
                name: "Fetch Data",
                duration,
                success: response.ok,
                resultCode: response.status,
                dependencyTypeName: "GetSomething",
                properties: {traceparent,traceparent}
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            setApiResult(data); 
            console.log('API response:', data);
           // appInsights.trackTrace({message: 'API Call successful',severityLevel: 0});
        } catch (error) {
            console.error('Error making API request:', error);
            //appInsights.trackException({exception: error});
        } finally {
            //appInsights.stopTrackPage(url);
        }

    };
    
    
    return (
        <div>
            <button onClick={fetchData}>Call API</button>
            {apiResult && (
                <div>
                    {/* Render API result */}
                    <p>Message: {apiResult.key}</p>
                </div>
            )}
        </div>
    );
};

const generateRandomHex = (length) => {
    let result = '';
    const characters = '0123456789abcdef';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export default withAITracking(reactPlugin, ApiButton);