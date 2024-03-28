import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
//import { reactPlugin } from "./appinsightsservice.tsx";

// import { ApplicationInsights } from '@microsoft/applicationinsights-web';
// import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';

// var reactPlugin = new ReactPlugin();
// const appInsights = new ApplicationInsights({ config: {
//   connectionString: 'InstrumentationKey=7ad782dd-9403-4ff6-ac91-eb50370ccbe1;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/'
//   , enableAutoRouteTracking: true,
//   extensions: [reactPlugin],
//   extensionConfig: {
//     [reactPlugin.identifier]: { history: browserHistory }
//   }
// } });
// appInsights.loadAppInsights();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <AppInsightsContext.Provider value={reactPlugin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  //</AppInsightsContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
