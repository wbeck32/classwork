const assert = require('assert');
const Store = require('../lib/store');

describe('object store', () => {

    describe('CRUD operations', () => {  
        let store = null;
        beforeEach(() => {
            store = new Store();
        });

        const cat = { type: 'cat', name: 'felix' };

        function testCat(actual) {
            assert.equal(actual.type, cat.type);
            assert.equal(actual.name, cat.name);
        }

        it('saves an gives an id', () => {
            const saved = store.save(cat);
            assert.ok(saved._id);
            testCat(saved);
        });

        it('gets saved object', () => {
            const cat = { type: 'cat', name: 'felix' };
            const { _id } = store.save(cat);
            const got = store.get(_id);
            testCat(got);
        });

        it('returns remove false if id does not exist', () => {
            const { removed } = store.remove('bad id');
            assert.ok(!removed);
        });

        it('removes a saved object', () => {
            const { _id } = store.save(cat);
            const { removed } = store.remove(_id);
            assert.ok(removed);
            const got = store.get(_id);
            assert.equal(got, null);
        });
    });

    describe('get all', () => {
        let store = new Store();

        const cats = [
            { type: 'cat', name: 'felix' },
            { type: 'cat', name: 'garfield' },
            { type: 'cat', name: 'heathcliff' }
        ];

        it('returns empty array when nothing in store', () => {
            assert.deepEqual(store.getAll(), []);
        });

        it('returns clone of list', () => {
            const list = store.getAll();
            list.push(4);
            assert.deepEqual(store.getAll(), []);
        });

        it('has saved objects', () => {
            cats.forEach(cat => store.save(cat));
            assert.deepEqual(store.getAll(), cats);
        });

        it('removing object means not in getAll', () => {
            store.remove(cats[1]._id);
            const got = store.getAll();
            assert.deepEqual(got, [cats[0], cats[2]]);
        });

    });
});