const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
    // eslint-disable-next-line
    console.log('http server running on', server.address());
});