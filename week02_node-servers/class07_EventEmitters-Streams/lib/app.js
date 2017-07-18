const fs = require('fs');

module.exports = (req, res) => {
    if(req.method === 'GET' && req.url === '/big.pdf') {
        res.setHeader('Content-Type', 'application/pdf');

        fs.createReadStream('./big.pdf').pipe(res);
    }
    else if(req.method === 'POST') {
        let body = '';
        
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            const obj = JSON.parse(body);
            obj.name = 'Wild Wild William';
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(obj));
        })

    }
    else {
        res.end('GET /big.pdf to get the big pdf');
    }


};