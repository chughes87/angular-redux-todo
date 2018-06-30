/* eslint-disable indent */
const express = require('express');
const csv = require('csvtojson');
const d3 = require('d3');
// const fs = require('fs');
// const rentalDataUtils = require('./rentalDataUtils/rentalDataUtils.js');

const csvFilePath = 'data/challenge_data.csv';


const fileReadPromise = csv().fromFile(csvFilePath).then((data) => {
    const nest = d3.nest().key(d => d.bedrooms);
                          // .key(d => d.bathrooms);
                          // .rollup(ds => ({
                          //     median: d3.median(ds.map(d => d.price)),
                          //     n: ds.length,
                          // }));
    return nest.entries(data);

    // fs.writeFile('data/result.json', JSON.stringify(nestedData, null, 4));
});


const app = express();

app.use(express.static('dist'));
app.get('/api/rentalData', (req, res) => {
    // TODO: add promise wait here for data processing to finish?
    fileReadPromise.then((nestedData) => {
        res.send(nestedData.find(d => d.key === req.query.bedrooms).values);

                           // .find(d => d.key === req.query.bathrooms).values);
    });
});
app.listen(8080, () => console.log('Listening on port 8080!'));
