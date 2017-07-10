const assert = require('assert');
const greeter = require('../src/greeter');

describe('greeting library', () => {
    it('greets by name', () => {
        const greeting = greeter('Ryu');
        assert.equal(greeting, 'Hello Ryu!');
    });
});