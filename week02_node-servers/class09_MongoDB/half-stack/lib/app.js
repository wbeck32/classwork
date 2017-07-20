const bodyParser = require('./body-parser');
const parseUrl = require('./parse-url');
const cats = require('./routes/cats');

const routes = {
    cats
}

function app(req, res) {
    res.setHeader('Content-Type', 'application/json');
    req.url = parseUrl(req.url);

    const route = routes[req.url.route];
    route(req, res);
}

module.exports = app;