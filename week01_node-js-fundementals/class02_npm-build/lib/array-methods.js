
function map(array, callback) {
    const mapped = [];
    for(let i = 0; i < array.length; i++) {
        mapped[i] = callback(array[i], i);
    }
    return mapped;
}

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

module.exports = { map, forEach };
