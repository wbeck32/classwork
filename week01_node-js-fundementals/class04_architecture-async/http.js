const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    let body = '';
    request.on('data', data => body += data);
    request.on('end', () => {
        const user = JSON.parse(body);
        console.log(user.email);
    });

    response.end('thanks for the body!');
}).listen(3001);