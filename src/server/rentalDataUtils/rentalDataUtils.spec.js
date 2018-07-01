const rentalDataUtils = require('./rentalDataUtils');

describe('rentalDataUtils', () => {
    // describe('nestData', () => {
    //     it('should nest data by bedrooms and bathrooms', () => {
    //         const data = [
    //             { bedrooms: 1, bathrooms: 1, price: 42 },
    //         ];
    //
    //         const result = rentalDataUtils.nestRentalData(data);
    //
    //         expect(result).toEqual({ 1: { 1: [42] } });
    //     });
    //
    //     it('should nest data by bedrooms and bathrooms - more complicated', () => {
    //         const data = [
    //             { bedrooms: 1, bathrooms: 1, price: 42 },
    //             { bedrooms: 1, bathrooms: 1, price: 40 },
    //             { bedrooms: 1, bathrooms: 2, price: 12 },
    //             { bedrooms: 1, bathrooms: 2, price: 1234 },
    //         ];
    //
    //         const result = rentalDataUtils.nestRentalData(data);
    //
    //         expect(result).toEqual({ 1: { 1: [42, 40], 2: [12, 1234] } });
    //     });
    //
    //     it('should nest data by bedrooms and bathrooms - more layers', () => {
    //         const data = [
    //             { bedrooms: 1, bathrooms: 1, price: 42 },
    //             { bedrooms: 1, bathrooms: 1, price: 40 },
    //             { bedrooms: 1, bathrooms: 2, price: 12 },
    //             { bedrooms: 1, bathrooms: 2, price: 1234 },
    //             { bedrooms: 2, bathrooms: 1, price: 42 },
    //             { bedrooms: 2, bathrooms: 1, price: 40 },
    //             { bedrooms: 2, bathrooms: 2, price: 12 },
    //             { bedrooms: 2, bathrooms: 2, price: 1234 },
    //         ];
    //
    //         const result = rentalDataUtils.nestRentalData(data);
    //
    //         expect(result).toEqual({
    //             1: { 1: [42, 40], 2: [12, 1234] },
    //             2: { 1: [42, 40], 2: [12, 1234] }
    //         });
    //     });
    // });

    describe('estimateRentalValue', () => {
        it('should give estimate for single data point', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 500);
            expect(result).toEqual({ medianPrice: 1000, n: 1 });
        });

        it('should give estimate for some data points - all same group', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 500);
            expect(result).toEqual({ medianPrice: 1500, n: 3 });
        });

        it('should give estimate for some data points - mixed groups bathrooms', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 2, price: 1000, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 2, price: 1500, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 2, price: 2000, squareFoot: 500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 500);
            expect(result).toEqual({ medianPrice: 1500, n: 3 });
        });

        it('should give estimate for some data points - mixed groups squareFeet', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 600 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 1100 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 101 },
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 100 },
                { bedrooms: 1, bathrooms: 1, price: 1100, squareFoot: 2000 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 2500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 600);
            expect(result).toEqual({ medianPrice: 1500, n: 3 });
        });
    });
});
