// models/Weather.js

const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    condition: String
});

module.exports = mongoose.model('Weather', weatherSchema);
