
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


module.exports = { 
    map, 
    forEach, 
    filter
};
