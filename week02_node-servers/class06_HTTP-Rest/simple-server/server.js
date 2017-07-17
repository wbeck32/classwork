var http = require('http');
var url = require('url');

const server = http.createServer((req, res) => {
	console.log(req.method, req.url);
	res.setHeader("Content-Type", "application/json");
	const urlToParse = '?object={"name" : "url"}';
	const parsedUrl = url.parse(urlToParse);
	res.end(JSON.stringify(parsedUrl));

		res.statusCode = 200;
	res.statusMessage = 'hey you\'re cool';
	if (req.url === 'error') {
		res.statusCode = 400;
		res.end('warning');
	}

	if(req.method === 'GET') {
		console.log('you wanted to ', `${req.method}`)
	} else {
		res.write('howdy: ');
	}
	res.end(' friend');



});

/* 	if (req.url === 'error') {
		res.statusCode = 400;
		res.end('warning');
	}

	if(req.method === 'GET') {
		console.log('you wanted to ', `${req.method}`)
	} else {
		res.write('howdy: ');
	}
	res.end(' friend');*/

const port = 2000;

server.listen(port, (err) => {
	console.log('server listening on port: ', port);

  if (err) {
		return console.log('something bad happened', err);
	}
});