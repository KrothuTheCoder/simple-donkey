// ApiButton.js
import React, { useState } from 'react';

const ApiButton = () => {
    const [apiResult, setApiResult] = useState(null); 

    const handleApiCall = async () => {
        try {
            const url = 'https://api.hakabo.com/api/data'; // Replace with your API endpoint
            const headers = {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': '1193b86901a44fa181cb016bfd85089f', 
            };

            const response = await fetch(url, { method: 'GET', headers });
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
                    <p>Message: {apiResult.message}</p>
                    <p>Validity: {apiResult.validity}</p>
                </div>
            )}
        </div>
    );
};

export default ApiButton;