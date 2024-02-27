// routes/weather.js

const express = require('express');
const axios = require('axios');
const router = express.Router();
const Weather = require('../models/Weather');

// Route to fetch weather data
router.get('/:city', async (req, res) => {
    const city = req.params.city;

    try {
        // Call weather API (e.g., OpenWeatherMap)
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        const data = response.data;

        // Save weather data to MongoDB
        const weather = new Weather({
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description
        });
        await weather.save();

        res.json(weather);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
