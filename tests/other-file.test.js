// This is foo function
const foo = require('../src/other-file');

it('foo returns the expected string', () => {
  const result = foo();
  expect(result).toBe('Always in motion is the future');
});
