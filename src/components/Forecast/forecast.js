import React, { useState } from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({})

    function getForecast() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': 'f64860b1eamshb8bc6b75db45977p1fb324jsn07d032ea121c'
            }
        };

        fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=seattle', options)
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )
}

export default Forecast;