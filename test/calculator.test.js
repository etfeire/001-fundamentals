const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies 4  * 2 to equal 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('checks if 65 is odd', () => {
  expect(calculator.isOdd(65)).toBe(true);
});

test('checks if 65 is even', () => {
  expect(calculator.isEven(65)).toBe(false);
});

test('checks if first number is evenly divisible by the second', () => {
  expect(calculator.divisibleBy(65, 5)).toBe(true);
});

test('checks square of 5 to equal 25', () => {
  expect(calculator.squared(5)).toBe(25);
});