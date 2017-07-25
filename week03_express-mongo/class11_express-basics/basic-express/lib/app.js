/* eslint no-console: off */

// core express import
const express = require('express');
// call "express()" to make an app
const app = express();
// use path util to make public directory
const path = require('path');
// read body of request and add as req.body
const bodyParser = require('body-parser');
// for making mongodb "_id"'s
const ObjectID = require('mongodb').ObjectID;
// for getting access to our needed collections
const connect = require('./db');

// a bit of middleware magic for today.
// create a json body parser and pass to 
// "app.use"    
app.use(bodyParser.json());

// use path.resolve to safely resolve path.
// (if you give a relative path directly to express.static
// it will throw an error)
const publicDir = path.resolve(__dirname, '../public');
// try any request as a "file" in ./public
app.use(express.static(publicDir));

// handle "POST" of a tourist
app.post('/tourists', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.insert(req.body)
        .then(res => res.ops[0])
        .then(tourist => res.send(tourist))
        .catch(console.log);
});

// handle a list "GET" of a tourists
app.get('/tourists', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    
    // make a query object, using the found query params on req.query.
    // (notice it works for no query params too (aka GET all))
    const query = {}
    if(req.query.from) query.from = req.query.from;
    if(req.query.name) query.name = req.query.name;

    Tourists.find(query).toArray()
        .then(tourists => res.send(tourists))
        .catch(console.log)
});

app.get('/tourists/:id', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    // read the id via req.params.id
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

app.post('/tourists/:id/favorites', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    const favorites = req.body.favorite ? [req.body.favorite] : req.body.favorites;

    Tourists.findOneAndUpdate({ 
        _id: new ObjectID(req.params.id)
    },{ 
        // $addToSet won't add dups, $push will push again
        // $each push each of the items in the array (otherwise we would
        // push an array as a single item)
        $addToSet: { favorites: { $each: favorites } } 
    }, {
        returnOriginal: false
    })
        .then(({ value }) => res.send(value))
        .catch(console.log);
});

app.delete('/tourists/:id/favorites', (req, res) => {
    const Tourists = connect.db.collection('tourists');
    Tourists.findOneAndUpdate({ 
        _id: new ObjectID(req.params.id)
    },{ 
        $pull: { favorites: req.body.favorite } 
    }, {
        returnOriginal: false
    })
        .then(({ value }) => res.send(value))
        .catch(console.log);
});

module.exports = app;