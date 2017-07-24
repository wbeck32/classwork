const http = require('http');
const db = require('./lib/db');
const app = require('./lib/app');

const dbUri = 'mongodb://localhost:27017/visit-pdx';
db.connect(dbUri);

const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
    // eslint-disable-next-line
    console.log('server up and running on', server.address().port);
});