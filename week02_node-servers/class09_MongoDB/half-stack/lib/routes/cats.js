const connection = require('../db');
const bodyParser = require('../body-parser');

module.exports = function cats(req, res) {
    const cats = connection.db.collection('cats');

    if(req.method === 'POST') {
        bodyParser(req)
            .then(cat => cats.insert(cat))
            .then(result => result.ops[0])
            .then(saved => {
                res.end(JSON.stringify(saved));
            })
            .catch(console.log);
    }
    else if(req.method === 'GET') {
        cats.find({})
            .toArray()
            .then(cats => res.end(JSON.stringify(cats)))
            .catch(console.log);
    } 
}