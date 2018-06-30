const rentalDataUtils = require('./rentalDataUtils');

describe('nestData', () => {
    it('should nest data by bedrooms and bathrooms', () => {
        const data = [
            { bedrooms: 1, bathrooms: 1, price: 42 },
        ];

        const result = rentalDataUtils.nestRentalData(data);

        expect(result).toEqual({ 1: { 1: [42] } });
    });

    it('should nest data by bedrooms and bathrooms - more complicated', () => {
        const data = [
            { bedrooms: 1, bathrooms: 1, price: 42 },
            { bedrooms: 1, bathrooms: 1, price: 40 },
            { bedrooms: 1, bathrooms: 2, price: 12 },
            { bedrooms: 1, bathrooms: 2, price: 1234 },
        ];

        const result = rentalDataUtils.nestRentalData(data);

        expect(result).toEqual({ 1: { 1: [42, 40], 2: [12, 1234] } });
    });

    it('should nest data by bedrooms and bathrooms - more layers', () => {
        const data = [
            { bedrooms: 1, bathrooms: 1, price: 42 },
            { bedrooms: 1, bathrooms: 1, price: 40 },
            { bedrooms: 1, bathrooms: 2, price: 12 },
            { bedrooms: 1, bathrooms: 2, price: 1234 },
            { bedrooms: 2, bathrooms: 1, price: 42 },
            { bedrooms: 2, bathrooms: 1, price: 40 },
            { bedrooms: 2, bathrooms: 2, price: 12 },
            { bedrooms: 2, bathrooms: 2, price: 1234 },
        ];

        const result = rentalDataUtils.nestRentalData(data);

        expect(result).toEqual({
            1: { 1: [42, 40], 2: [12, 1234] },
            2: { 1: [42, 40], 2: [12, 1234] }
        });
    });
});
