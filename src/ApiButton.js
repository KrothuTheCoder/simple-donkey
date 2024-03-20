// ApiButton.js
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import React, { useEffect, useState } from 'react';

function ApiButton () {

    const [apiResult, setApiResult] = useState(null); 
    
    const appInsights = new ApplicationInsights({config:{
                connectionString: 'InstrumentationKey=7ad782dd-9403-4ff6-ac91-eb50370ccbe1;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/'
            }});
    appInsights.loadAppInsights();
   

    const fetchData = async () => {
        
        const url = 'https://api.hakabo.com/arc/dev/v1/Something/DoSomething'; // Replace with your API endpoint
        const headers = {
            'Ocp-Apim-Subscription-Key': '397eadcd9f5a4944a73f4dd48125d1ae', 
        };
        appInsights.startTrackPage(url);
        try {
            const response = await fetch(url, {mode:'cors', method: 'GET', headers });
            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            setApiResult(data); 
            console.log('API response:', data);
            appInsights.trackTrace({message: 'API Call successful',severityLevel: 0});
        } catch (error) {
            console.error('Error making API request:', error);
            appInsights.trackException({exception: error});
        } finally {
            appInsights.stopTrackPage(url);
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

export default ApiButton;