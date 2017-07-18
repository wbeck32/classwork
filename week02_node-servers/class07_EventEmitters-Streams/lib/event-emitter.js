const fs = require('fs');

// const filename = './lib/event-emitter.js';
const filename = './big.pdf';

fs.readFile(filename, (err, buffer) => {
    console.log('readFile', buffer.length);
});

const stream = fs.createReadStream(filename);

let length = 0;
stream.on('data', buffer => {
    length += buffer.length;
    console.log('chunk', buffer.length);
});
stream.on('end', data => {
    console.log('total', length);
});