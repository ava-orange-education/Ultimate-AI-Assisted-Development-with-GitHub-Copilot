// Prompt: Generate unit tests for sum function using Jest
const { sum } = require('./sum_function');

test('adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
