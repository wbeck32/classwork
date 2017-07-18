// export a function that can be used to create
// a function bound to some initial values:

// const makeMultiplier = require('./make-multiplier');
// const multiplier = makeMultiplier(9);
// multiplier(3);

function makeMultiplier(x) {
    return function multiple(y) {
        return x * y;
    };
}

module.exports = makeMultiplier;


// or:
// module.exports = function makeMultiplier(x) { ...