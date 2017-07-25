function app(req, res) {
    if(req.method === 'GET' && req.url === '/coder') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ name: 'martypdx', since: 1999 }));
    }
    else if(req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<p>Hello World</p>');
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
    }
}

module.exports = app;