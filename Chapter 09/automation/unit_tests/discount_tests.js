// Prompt: "Generate Jest unit tests for the following function."

// Original function:
// function calculateDiscount(price, discountPercentage) {
//   if (price <= 0 || discountPercentage < 0 || discountPercentage > 100) {
//     throw new Error('Invalid input');
//   }
//   return price - (price * (discountPercentage / 100));
// }

const { calculateDiscount } = require('./discount');

describe('calculateDiscount', () => {
  it('should calculate the correct discount', () => {
    expect(calculateDiscount(100, 20)).toBe(80);
    expect(calculateDiscount(200, 50)).toBe(100);
  });

  it('should throw an error for invalid inputs', () => {
    expect(() => calculateDiscount(-100, 20)).toThrow('Invalid input');
    expect(() => calculateDiscount(100, -20)).toThrow('Invalid input');
    expect(() => calculateDiscount(100, 120)).toThrow('Invalid input');
  });

  it('should return the same price for a 0% discount', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });
});