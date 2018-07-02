/* eslint-disable indent */
const express = require('express');
const csv = require('csvtojson');
const rentalDataUtils = require('./rentalDataUtils/rentalDataUtils.js');

const csvFilePath = 'data/challenge_data.csv';

const csvOptions = {
    colParser: {
        price: 'number',
        bedrooms: 'number',
        bathrooms: 'number',
        'square-foot': 'number',
    },
    noheader: false,
    headers: ['price', 'bedrooms', 'bathrooms', 'squareFoot'],
};

// TODO: do this in a less wasteful way?
const getData = async () => csv(csvOptions).fromFile(csvFilePath);

const app = express();

app.use(express.static('dist'));
app.get('/api/rentalData', async (req, res) => {
    const data = await getData();
    res.send(rentalDataUtils.getBedroomData(data, req.query.bedrooms));
});

app.get('/api/rentalEstimate', async (req, res) => {
    const data = await getData();
    const { bedrooms, bathrooms, squareFoot } = req.query;
    const estimate = rentalDataUtils.estimateRentalValue(data, +bedrooms, +bathrooms, +squareFoot);
    res.send(estimate);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
