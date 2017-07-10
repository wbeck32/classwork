const assert = require('assert');
const args = require('../src/process-args');

describe('greeting library', () => {
    it('returns 3rd argument as name', () => {
        const options = args(['node', 'greeter.js', 'fred']);
        assert.deepEqual(options, { name: 'fred' });
    });

});