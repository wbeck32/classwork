const assert = require('assert');
const { map, forEach } = require('../lib/array-methods');

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

    it('forEach', () => {
        const array = [1, 2, 3];
        const called = [];
        forEach(array, x => called.push(x));
        assert.deepEqual(called, array);
    });

    it('forEach passes index as second arg', () => {
        const array = [1, 2, 3];
        const indexes = [];
        forEach(array, (x, i) => indexes.push(i));
        assert.deepEqual(indexes, [0, 1, 2]);
    });
});