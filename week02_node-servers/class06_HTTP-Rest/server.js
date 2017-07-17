const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');
    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
    res.end(JSON.stringify(parsedUrl));



    // res.setHeader('Content-Type', 'text/html');
    // if(req.url === '/error') {
    //     res.statusCode = 400;
    //     res.statusMessage = 'Oh No!';
    //     res.end('Warning!');
    // }
    // else {
    //     res.statusCode = 200;
    //     res.statusMessage = 'Okie Dokie';
    //     res.write('<h1>very simple http server</h1>');
    //     if(req.method === 'GET') {
    //         res.write(`<p>you wanted to get ${req.url}</p>`);
    //     }
    //     else {
    //         res.write('<p>hello world</p>');
    //     }
    //     res.end('<p>have a nice day!</p>');
    // }
});

const port = 3000;
server.listen(port, () => {
    console.log('http server running on', server.address());
});
