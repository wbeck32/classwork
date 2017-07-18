// a function. no setup, just import and use:

// const square = require('./square');
// square(9);


function square(x) {
    return x * x;
}

module.exports = square;


// or:
// module.exports = function square(x) { ...