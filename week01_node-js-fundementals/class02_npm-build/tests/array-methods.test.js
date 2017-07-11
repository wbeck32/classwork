const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {

    it('map', () => {
        const array = [1, 2, 3];
        const mapped = map(array, x => x * x);
        assert.deepEqual(mapped, [1, 4, 9]);
    });

    it('map passes index as second arg', () => {
        const array = [1, 2, 3];
        const mapped = map(array, (x, i) => i);
        assert.deepEqual(mapped, [0, 1, 2]);
    });
});