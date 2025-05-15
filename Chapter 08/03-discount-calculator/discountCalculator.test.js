// GitHub Copilot Prompt:
// Write Jest test cases for a discount calculator.
// Include tests for valid codes, invalid codes, and edge cases like no code provided.

const calculateDiscount = require('./discountCalculator');

describe('calculateDiscount', () => {
    test('applies valid promotion code SUMMER21', () => {
        const result = calculateDiscount(100, 'SUMMER21');
        expect(result).toEqual({
            finalPrice: '90.00',
            message: "Promotion code 'SUMMER21' applied. You saved 10%."
        });
    });

    test('applies valid promotion code WINTER21', () => {
        const result = calculateDiscount(200, 'WINTER21');
        expect(result).toEqual({
            finalPrice: '170.00',
            message: "Promotion code 'WINTER21' applied. You saved 15%."
        });
    });

    test('handles invalid promotion code', () => {
        const result = calculateDiscount(100, 'INVALIDCODE');
        expect(result).toEqual({
            finalPrice: '100.00',
            message: "Invalid promotion code 'INVALIDCODE'. No discount applied."
        });
    });

    test('handles no promotion code provided', () => {
        const result = calculateDiscount(100);
        expect(result).toEqual({
            finalPrice: '100.00',
            message: 'No promotion code applied.'
        });
    });

    test('throws error for invalid price', () => {
        expect(() => calculateDiscount(-100, 'SUMMER21')).toThrow('Invalid price. Price must be a positive number.');
    });

    test('throws error for non-numeric price', () => {
        expect(() => calculateDiscount('100', 'SUMMER21')).toThrow('Invalid price. Price must be a positive number.');
    });
});
