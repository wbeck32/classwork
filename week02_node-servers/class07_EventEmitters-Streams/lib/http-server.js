const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/big.pdf') {
        res.setHeader('Content-Type', 'application/pdf');

        const stream = fs.createReadStream('./big.pdf');
        stream.on('data', chunk => {
            res.write(chunk);
        });
        stream.on('end', () => {
            res.end();
        });
    }
    else {
        res.end('GET /big.pdf to get the big pdf');
    }
}).listen(3000);