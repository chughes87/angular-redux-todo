const rentalDataUtils = require('./rentalDataUtils');

describe('rentalDataUtils', () => {
    describe('estimateRentalValue', () => {
        it('should give estimate for single data point', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 500);
            expect(result).toEqual({ medianPrice: 1000, dataCount: 1 });
        });

        it('should give estimate for some data points - all same group', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 500 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 500);
            expect(result).toEqual({ medianPrice: 1500, dataCount: 3 });
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
            expect(result).toEqual({ medianPrice: 1500, dataCount: 3 });
        });

        it('should give estimate for some data points - mixed groups squareFeet', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 600 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 700 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 501 },
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 100 },
                { bedrooms: 1, bathrooms: 1, price: 1100, squareFoot: 2000 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 2500 },
            ];

            const result = rentalDataUtils.estimateRentalValue(data, 1, 1, 600);
            expect(result).toEqual({ medianPrice: 1500, dataCount: 3 });
        });
    });

    describe('getBedroomData', () => {
        it('should group data by bedroom count', () => {
            const data = [
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 600 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 700 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 501 },
                { bedrooms: 2, bathrooms: 1, price: 1000, squareFoot: 100 },
                { bedrooms: 2, bathrooms: 1, price: 1100, squareFoot: 2000 },
                { bedrooms: 2, bathrooms: 1, price: 2000, squareFoot: 2500 },
            ];

            const result = rentalDataUtils.getBedroomData(data, '1');
            expect(result).toEqual([
                { bedrooms: 1, bathrooms: 1, price: 1000, squareFoot: 600 },
                { bedrooms: 1, bathrooms: 1, price: 1500, squareFoot: 700 },
                { bedrooms: 1, bathrooms: 1, price: 2000, squareFoot: 501 },
            ]);
        });
    });
});
