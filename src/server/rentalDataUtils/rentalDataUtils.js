Object.assign(exports, {
    nestRentalData
});

function nestRentalData(data) {
    return data.reduce((nestedData, datum) => {
        if (!nestedData[datum.bedrooms]) {
            nestedData[datum.bedrooms] = {
                [datum.bathrooms]: [datum.price],
            };
        } else if (!nestedData[datum.bedrooms][datum.bathrooms]) {
            nestedData[datum.bedrooms][datum.bathrooms] = [datum.price];
        } else {
            nestedData[datum.bedrooms][datum.bathrooms].push(datum.price);
        }

        return nestedData;
    }, {});
}
