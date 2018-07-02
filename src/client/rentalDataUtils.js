const rentalDataUtils = {
    getEstimate: (bedrooms, bathrooms, squareFoot) => {
        const endpoint = `/api/rentalEstimate?bedrooms=${bedrooms}&bathrooms=${bathrooms}&squareFoot=${squareFoot}`;
        return fetch(endpoint)
            .then(result => result.json());
    },
    getExplanatoryData: (bedrooms) => {
        const endpoint = `/api/rentalData?bedrooms=${bedrooms}`;
        return fetch(endpoint)
            .then(result => result.json());
    }
};

export default rentalDataUtils;
