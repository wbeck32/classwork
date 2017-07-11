const assert = require('assert');
const { map, forEach } = require('../lib/array-methods');

describe('array methods', () => {

    function testIndexes(fn) {
        const array = [1, 2, 3];
        const indexes = [];
        fn(array, (x, i) => indexes.push(i));
        assert.deepEqual(indexes, [0, 1, 2]);
    }

    it('map', () => {
        const array = [1, 2, 3];
        const mapped = map(array, x => x * x);
        assert.deepEqual(mapped, [1, 4, 9]);
    });

    it('map passes index as second arg', () => {
        testIndexes(map);
    });

    it('forEach', () => {
        const array = [1, 2, 3];
        const called = [];
        forEach(array, x => called.push(x));
        assert.deepEqual(called, array);
    });

    it('forEach passes index as second arg', () => {
        testIndexes(forEach);
    });

});