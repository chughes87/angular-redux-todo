const d3 = require('d3');

Object.assign(exports, {
    getBedroomData,
    estimateRentalValue,
});

function getBedroomData(data, bedrooms) {
    return d3.nest().key(d => d.bedrooms)
        .entries(data)
        .find(d => d.key === bedrooms).values;
}

function estimateRentalValue(data, bedrooms, bathrooms, squareFoot) {
    const nestedData = d3.nest().key(d => d.bedrooms)
        .key(d => d.bathrooms)
        .entries(data);

        // TODO: figure out how to key by integers?
    const relevantData = nestedData.find(d => bedrooms === +d.key).values
        .find(d => bathrooms === +d.key).values
        .filter(d => d.squareFoot <= (squareFoot + 100)
                  && d.squareFoot > (squareFoot - 100));

    if (relevantData) {
        return {
            medianPrice: d3.median(relevantData.map(d => d.price)),
            n: relevantData.length,
        };
    }

    // TODO: trigger error here
    return null;
}
