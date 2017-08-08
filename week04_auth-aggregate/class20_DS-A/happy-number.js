
function happy(n) {
    const seen = new Set();
    return (function tryNumber(n) {
        seen.add(n);
        const sum = sumSquares(n);
        if(sum === 1) return true
        if(seen.has(sum)) return false;
        return tryNumber(sum);
    })(n);
}

function sumSquares(n) {
    return n.toString()
        .split('')
        .map(n => +n)
        .map(n => n*n)
        .reduce((a, b) => a + b)
}

console.log(19, happy(19));
console.log(4, happy(4));