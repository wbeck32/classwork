const assert = require('assert');
const Store = require('../lib/store');

describe('object store', () => {

    it('saves', () => {
        const store = new Store();
        const cat = { type: 'cat', name: 'felix' };
        const saved = store.save(cat);
        assert.ok(saved._id);
        assert.equal(saved.type, cat.type);
        assert.equal(saved.name, cat.name);
    });
});