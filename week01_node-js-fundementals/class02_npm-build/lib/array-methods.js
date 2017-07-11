
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
    const hasInitialValue = initialValue !== undefined;
    if(!hasInitialValue) initialValue = array[0];
    let i = hasInitialValue ? 0 : 1;
    
    for(; i < array.length; i++) {
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
