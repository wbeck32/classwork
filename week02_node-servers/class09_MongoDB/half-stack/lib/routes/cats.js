const connection = require('../db');

module.exports = function cats(req, res) {
    const cats = connection.db.collection('cats');

    if(req.method === 'POST') {
        cats.insert(req.body)
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