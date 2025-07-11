const mult = require('../src/mult');

it('should return correct multiplication result', () => {
  const result = mult(3, 8);
  expect(result).toBe(24);
})