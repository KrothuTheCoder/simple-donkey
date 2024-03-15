// ApiButton.js
import React, { useState } from 'react';

const ApiButton = () => {
    const [apiResult, setApiResult] = useState(null); 

    const handleApiCall = async () => {
        try {
            const url = 'https://api.hakabo.com/api/arc/v1/something/dosomething'; // Replace with your API endpoint
            const headers = {
                'Ocp-Apim-Subscription-Key': '397eadcd9f5a4944a73f4dd48125d1ae', 
            };

            const response = await fetch(url, {mode:'cors', method: 'GET', headers });
            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            setApiResult(data); 
            console.log('API response:', data);
        } catch (error) {
            console.error('Error making API request:', error);
        }
    };

    return (
        <div>
            <button onClick={handleApiCall}>Call API</button>
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