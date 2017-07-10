const assert = require('assert');

function greeter() {

}

describe('greeting library', () => {
    it('greets by name', () => {
        const greeting = greeter('Ryu');
        assert.equal(greeting, 'Hello Ryu!');
    });
});