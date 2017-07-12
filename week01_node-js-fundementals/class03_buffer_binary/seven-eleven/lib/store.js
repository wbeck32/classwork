const shortid = require('shortid');

class Store {

    constructor() {
        this._list = [];
    }

    save(object) {
        object._id = shortid.generate();
        this._list.push(object);
        return object;
    }

    get(_id) {
        return this._list.find(o => o._id === _id) || null;
    }

    getAll() {
        return this._list.slice();
    }

    remove(_id) {
        const index = this._list.findIndex(o => o._id === _id);
        if(index < 0) return { removed: false };
        this._list.splice(index, 1);
        return { removed: true };
    }
}

module.exports = Store;