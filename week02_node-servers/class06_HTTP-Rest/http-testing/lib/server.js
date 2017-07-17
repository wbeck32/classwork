const http = require('http');
const app = require('url');

const server = http.createServer();

/* 		res.statusCode = 200;
	res.statusMessage = 'hey you\'re cool';
	if (req.url === 'error') {
		res.statusCode = 400;
	}

	res.end(' friend'); */

const port = 2000;

server.listen(port, (err) => {
	console.log('server listening on port: ', server.address());

  if (err) {
		return console.log('something bad happened', err);
	}
});