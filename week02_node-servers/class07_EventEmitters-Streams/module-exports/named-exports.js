// exports related things.
// (With ES6 modules, this would be named exports)

// const utils = require('./utils');
// utils.one();
// console.log(utils.whatevs);

function one() {}

function two() {}

const whatevs = {};

module.exports = {
    one,
    two,
    whatevs
}

// or:
// module.exports = {
//     one() {... }
//     two() {... }
//     whatevs: {}
// };

