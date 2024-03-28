// import React from 'react';
// import { ApplicationInsights } from '@microsoft/applicationinsights-web';
// import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
// import { createBrowserHistory } from "history";

// const browserHistory = createBrowserHistory({ basename: '' });
// var reactPlugin = new ReactPlugin();
// const appInsights = new ApplicationInsights({
//     config: {
//         connectionString: 'InstrumentationKey=7ad782dd-9403-4ff6-ac91-eb50370ccbe1;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/',
//         extensions: [reactPlugin],
//         extensionConfig: {
//           [reactPlugin.identifier]: { history: browserHistory }
//         }
//     }
// });

// appInsights.loadAppInsights();
// const url = 'https://api.hakabo.com/arc/dev/v1/Something/DoSomething'; // Replace with your API endpoint
//     const headers = {
//         'Ocp-Apim-Subscription-Key': 'c2d941651361491f95f71aecf591e3e0'
//     };

// class MyComponent extends React.Component {
    

    
//     return async (operationName,  options) => {
//         try {
//             const startTime = Date.now();
//             const response = await fetch(url, {mode:'cors', method: 'GET', headers });
//             const endTime = Date.now();
//             const duration = endTime - startTime;
//             // Track the fetch operation
//             //appInsights.trackEvent({ name: "FetchOperation", properties: { operation: operationName, url } });
//             appInsights.trackDependencyData({
//                 id: "FetchData",
//                 target: url,
//                 name: "Fetch Data",
//                 duration,
//                 success: response.ok,
//                 resultCode: response.status
//             });
//             // You might want to track additional information such as response status, etc.

//             return response;
//         } catch (error) {
//             // Handle errors
//             console.error("Fetch error:", error);
//             throw error;
//         }
//     };
// }
// export default withAITracking(reactPlugin, trackFetch);
