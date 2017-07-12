const assert = require('assert');
const Store = require('../lib/store');

describe('object store', () => {

    let store = null;
    beforeEach(() => {
        store = new Store();
    });

    it('saves an gives an id', () => {
        const cat = { type: 'cat', name: 'felix' };
        const saved = store.save(cat);
        assert.ok(saved._id);
        assert.equal(saved.type, cat.type);
        assert.equal(saved.name, cat.name);
    });

    it('gets saved object', () => {
        const cat = { type: 'cat', name: 'felix' };
        const { _id } = store.save(cat);
        const got = store.get(_id);
        assert.equal(got.type, cat.type);
        assert.equal(got.name, cat.name);
    });

    describe('get all', () => {
        let store = new Store();

        it('returns empty array when nothing in store', () => {
            assert.deepEqual(store.getAll(), []);
        });
    });
});