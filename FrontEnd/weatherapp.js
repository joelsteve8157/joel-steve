// WeatherApp.js

import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
            setWeatherData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            <button onClick={fetchWeather}>Get Weather</button>
            {weatherData && (
                <div>
                    <h2>{weatherData.city}</h2>
                    <p>Temperature: {weatherData.temperature}</p>
                    <p>Condition: {weatherData.condition}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
