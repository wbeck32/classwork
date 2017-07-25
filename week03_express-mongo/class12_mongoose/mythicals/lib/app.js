const express = require('express');
const app = express();
// const morgan = require('morgan');
const bodyParser = require('body-parser');

const Unicorn = require('./models/unicorn');

app.use(bodyParser.json());
// app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/unicorns/count', (req, res) => {
    // use the Model method (we don't have a instance yet!)
    // with findOne or findById to get a single object
    Unicorn.find()
        .count()
        .then(count => res.send({ count }))
        .catch(console.log);
});

app.get('/unicorns/:id', (req, res) => {
    // use the Model method (we don't have a instance yet!)
    // with findOne or findById to get a single object
    Unicorn.findById(req.params.id)
        .lean()
        .then(unicorn => res.send(unicorn))
        .catch(console.log);
});

app.get('/unicorns', (req, res) => {
    // use the Model method to "query" and
    // get list of unicorns
    Unicorn.find()
        .lean()
        .select('name color')
        .then(unicorns => res.send(unicorns))
        .catch(console.log);
});

app.post('/unicorns', (req, res) => {
    // Create a "new" unicorn by using the Model
    // as a class (or constructor function).
    // we can pass in req.body as "initial data".
    // same as:
    // const unicorn = new Unicorn(req.body);
    // unicorn.save().then(...)
    new Unicorn(req.body)
        .save()
        .then(unicorn => res.send(unicorn))
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

app.delete('/unicorns/:id', (req, res) => {
    Unicorn.findByIdAndRemove(req.params.id)
        .then(unicorn => res.send(unicorn))
        .catch(console.log);
});

app.put('/unicorns/:id', (req, res) => {
    Unicorn.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(unicorn => res.send(unicorn))
        .catch(console.log);
});

app.patch('/unicorns/:id', (req, res) => {
    Unicorn.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { 
        new: true, 
        runValidators: true 
    })
        .then(unicorn => res.send(unicorn))
        .catch(console.log);
});

module.exports = app;