import React, { useState } from 'react';
import Conditions from '../Conditions/conditions';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

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
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions
                responseObj={responseObj}
            />
        </div>
    )
}

export default Forecast;