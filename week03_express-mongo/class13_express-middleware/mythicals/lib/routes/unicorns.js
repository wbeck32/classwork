const express = require('express');
const router = express.Router();
const Unicorn = require('../models/unicorn');
const jsonParser = require('body-parser').json();
const candies = require('./candies');

router
    .get('/count', (req, res, next) => {
        // use the Model method (we don't have a instance yet!)
        // with findOne or findById to get a single object
        Unicorn.find()
            .count()
            .then(count => res.send({ count }))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        // use the Model method (we don't have a instance yet!)
        // with findOne or findById to get a single object
        Unicorn.findById(req.params.id)
            .lean()
            .then(unicorn => {
                if(!unicorn) res.status(404).send(`Cannot GET ${req.params.id}`);
                else res.send(unicorn)
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {
        // use the Model method to "query" and
        // get list of unicorns
        Unicorn.find()
            .lean()
            .select('name color')
            .then(unicorns => res.send(unicorns))
            .catch(next);
    })

    .use(jsonParser)

    .post('/', (req, res, next) => {
        // Create a "new" unicorn by using the Model
        // as a class (or constructor function).
        // we can pass in req.body as "initial data".
        // same as:
        // const unicorn = new Unicorn(req.body);
        // unicorn.save().then(...)
        const unicorn = new Unicorn(req.body);
        unicorn
            .save()
            .then(unicorn => res.send(unicorn))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Unicorn.findByIdAndRemove(req.params.id)
            .then(unicorn => res.send(unicorn))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        Unicorn.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(unicorn => res.send(unicorn))
            .catch(next);
    })

    .patch('/:id', (req, res, next) => {
        Unicorn.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { 
            new: true, 
            runValidators: true 
        })
            .then(unicorn => res.send(unicorn))
            .catch(next);
    })

    // TODO: use param to extract id
    .use('/:id/candies', candies);


module.exports = router;