const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {
    })

    .get('/:id', (req, res, next) => {
    })

    .post('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then(pet => res.send(pet))
            .catch(next);
    })

    .put('/:id', (req, res, next) => { 
        delete req.body._id;
        Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(pet => res.send(pet))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => { 
        Pet.findByIdAndRemove(req.params.id)
            .then(response => res.send({ removed: !!response }))
            .catch(next);
    });


module.exports = router;