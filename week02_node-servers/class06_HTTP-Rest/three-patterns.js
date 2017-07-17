const fs = require('fs');

console.log('A');
[1, 2, 3, 4].map(x => console.log(x));
console.log('B');

console.log('C');
fs.readFile('some.js', (err, data) => console.log('file read'))
console.log('D');

