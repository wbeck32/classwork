// const express = require('express');
// const app = express();
const app = require('express')();
const connect = require('./db');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID

// a bit of middleware magic for today.
// create a json body parser and pass to 
// "app.use"    
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<p>Hello from Express!</p>');
});

app.post('/tourists', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.insert(req.body)
        .then(res => res.ops[0])
        .then(tourist => res.send(tourist))
        .catch(console.log);
});

app.get('/tourists', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.find().toArray()
        .then(tourists => res.send(tourists))
        .catch(console.log)
});

app.get('/tourists/:id', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.findOne({ _id: new ObjectID(req.params.id)})
        // .then(res => res.ops[0])
        .then(tourist => res.send(tourist))
        .catch(console.log)
});

app.get('/items', (req, res) => {
    res.json([{ name: 'FOO' }, { name: 'BAR' }]);
});

module.exports = app;