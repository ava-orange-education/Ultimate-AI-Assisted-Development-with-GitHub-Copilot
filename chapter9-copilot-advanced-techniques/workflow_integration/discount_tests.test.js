// Prompt: Write tests for applyDiscount function using Jest
const { applyDiscount } = require('./discount_function');

test('applies 20% discount correctly', () => {
  expect(applyDiscount(100, 20)).toBe(80);
});

test('throws error for invalid discount', () => {
  expect(() => applyDiscount(100, 110)).toThrow("Invalid discount percent");
});
