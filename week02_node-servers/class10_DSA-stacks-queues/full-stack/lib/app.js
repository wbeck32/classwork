const bodyParser = require('./utils/body-parser');
const parseUrl = require('./utils/parse-url');
const cats = require('./routes/cats');
const notFound = require('./utils/not-found');

const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path');
const readdir = promisify(fs.readdir);
const publicPath = path.resolve(__dirname, '../public');

let public = null;
readdir(publicPath).then(files => public = files.reduce((o, f) => (o[f] = true, o), {}));

const routes = {
    cats
}

function app(req, res) {
    req.url = parseUrl(req.url);
    const route = req.url.route || 'index.html';

    if(req.method === 'GET' && public[route]) {
        const file = path.join(publicPath, route);
        return fs.createReadStream(file).pipe(res);
    }

    res.setHeader('Content-Type', 'application/json');

    bodyParser(req)
        .then(body => req.body = body)
        .then(() => {
            (routes[route] || notFound)(req, res);
        })
        .catch(console.log);


}

module.exports = app;