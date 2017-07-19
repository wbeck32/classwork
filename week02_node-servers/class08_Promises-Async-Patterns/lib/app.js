
function bodyParser(req, callback) {
    let body = '';
    req.on('data', data => body += data);
    req.on('error', err => callback(err));
    // same functionality as above line:
    // req.on('error', callback);
    req.on('end', () => {
        try {
            const obj = body ? JSON.parse(body) : null;
            callback(null, obj);
        } catch(err) {
            callback(err);
        }
    });
}

module.exports = function app(req, res) {

    bodyParser(req, (err, body) => {
        // do something with body...
    });
};
