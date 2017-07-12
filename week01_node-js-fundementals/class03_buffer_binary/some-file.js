const assert = require('assert');

const array = [{ name: 'foo' }, 2, 3];


assert.deepEqual(array, [{ name: 'foo' }, 2, 3]);
assert.equal(array, [{ name: 'foo' }, 2, 3]);


assert.deepEqual(Object.keys(obj1), Object.keys(obj2));