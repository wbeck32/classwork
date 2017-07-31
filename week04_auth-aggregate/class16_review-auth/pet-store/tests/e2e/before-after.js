/* Let's connect to mongo once here */
// Creates global before and after functions
// Mocha registers all the tests into one place
// taking into consideration befores, beforeEaches etc.
// Then it runs all the tests based on the register

const connect = require('../../lib/connect');

let connection = null;

before(() => {
    return connect('mongodb://localhost:27017/pet-test')
        .then(cn => connection = cn);
});

after(() => connection.close());
