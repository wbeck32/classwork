const assert = require('assert');
const { map, forEach, filter, reduce } = require('../lib/array-methods');

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

    it('filter', () => {
        const array = [1, 2, 3];
        const oddNumber = filter(array, x => x%2 === 1);
        assert.deepEqual(oddNumber, [1, 3]);
    });

    it('filter passes index as second arg', () => {
        testIndexes(filter);
    });

    it('reduce', () => {
        const array = [1, 2, 3];
        const sum = reduce(array, (total, x) => total + x, 0);
        assert.equal(sum, 6);
    });

    it('reduce passes index as 3rd argument', () => {
        const array = [1, 2, 3];
        const indexes = [];
        reduce(array, (x, y, i) => indexes.push(i), 0);
        assert.deepEqual(indexes, [0, 1, 2]);
    });

    it('reduce default to first item when no initial Value', () => {
        const array = [1, 2, 3];
        const sum = reduce(array, (total, x) => total + x);
        assert.equal(sum, 6);
    });

    it('reduce no init value, passes index as 3rd argument', () => {
        const array = [1, 2, 3];
        const indexes = [];
        reduce(array, (x, y, i) => indexes.push(i));
        assert.deepEqual(indexes, [1, 2]);
    });

});