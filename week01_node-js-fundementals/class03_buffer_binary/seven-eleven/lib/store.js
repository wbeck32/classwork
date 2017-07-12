const shortid = require('shortid');

class Store {

    constructor() {
        this.list = [];
    }

    save(object) {
        object._id = shortid.generate();
        this.list.push(object);
        return object;
    }

    get(_id) {
        return this.list.find(o => o._id === _id) || null;
    }

    getAll() {
        return this.list.slice();
    }

    remove(_id) {
        const index = this.list.findIndex(o => o._id === _id);
        if(index < 0) return { removed: false };
        this.list.splice(index, 1);
        return { removed: true };
    }
}

module.exports = Store;