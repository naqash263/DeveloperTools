// test.js

const { formatString } = require('../src/formatters');
test('formats a string', () => {
    expect(formatString(' test ')).toBe('test');
});