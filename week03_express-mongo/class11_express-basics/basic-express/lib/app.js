const express = require('express');
const app = express();
const connect = require('./db');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID
const path = require('path');

// a bit of middleware magic for today.
// create a json body parser and pass to 
// "app.use"    
app.use(bodyParser.json());

// try any request as a "file" in ./public
const publicDir = path.resolve(__dirname, '../public');
app.use(express.static(publicDir));

app.post('/tourists', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.insert(req.body)
        .then(res => res.ops[0])
        .then(tourist => res.send(tourist))
        .catch(console.log);
});

app.get('/tourists', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    
    const query = {}
    if(req.query.from) query.from = req.query.from;
    if(req.query.name) query.name = req.query.name;

    Tourists.find(query).toArray()
        .then(tourists => res.send(tourists))
        .catch(console.log)
});

app.get('/tourists/:id', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.findOne({ _id: new ObjectID(req.params.id)})
        .then(tourist => res.send(tourist))
        .catch(console.log);
});

app.delete('/tourists/:id', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.removeOne({ _id: new ObjectID(req.params.id)})
        .then(({ result }) => res.send({ removed: result.n === 1 }))
        .catch(console.log);    
});

module.exports = app;