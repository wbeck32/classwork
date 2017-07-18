// export a function that can be used to create
// an object based on some initial values
// (aka revealing module pattern):

// const createStore = require('./create-store');
// const store = createStore('animals');

function createStore(tableName) {

    return {
        get() { /*...*/ },
        save(table) {  /*...*/ }
    }
}

// can also be used with a class:
function createStore2(tableName) {
    // Store can be imported (required)
    // or live in this module
    return new Store(tableName);
}

module.exports = createStore;

// or:
// module.exports = function createStore(tableName) { ...