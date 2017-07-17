const http = require('http');
const greeter = require('./src/greeter');

http.createServer((request, response) => {
    response.end(greeter());
}).listen(3001);