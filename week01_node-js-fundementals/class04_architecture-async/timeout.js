const http = require('http');
const fs = require('fs');

console.log('starting');

setTimeout(() => {
    console.log('timeout done');
}, 500);

http.createServer((request, response) => {
    const user = request.body;
    db.save(user, (err, savedObject) => {
        response.end('hello world');
    });
}).listen(3001);


function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err) return console.log('ERROR', err);
        console.log('file', filename, 'preview:', data.slice(20));
    });

}
readFile('timeout.js');

console.log('at end of code in file');