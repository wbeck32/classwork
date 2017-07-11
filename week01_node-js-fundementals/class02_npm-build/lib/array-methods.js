
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

function filter(array, callback) {
    const filtered = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        if(callback(item, i)) {
            filtered[filtered.length] = item;
        }
    }
    return filtered;
}

function reduce(array, callback, initialValue) {
    const hasInit = initialValue !== undefined;
    if(!hasInit) initialValue = array[0];

    for(let i = hasInit ? 0 : 1; i < array.length; i++) {
        initialValue = callback(initialValue, array[i], i);
    }
    return initialValue;
}

module.exports = { 
    map, 
    forEach, 
    filter,
    reduce
};
