const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {
        // Populate child "Pet" with
        // parent "Store" data
        Pet.find()
            .lean()
            .select('name type store')
            .populate({
                path: 'store',
                select: 'name'
            })
            .then(pets => res.send(pets))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Pet.findById(req.params.id)
            .lean()
            .populate({
                path: 'store',
                select: 'name'
            })
            .populate({
                path: 'toys',
                select: 'name color'
            })
            .then(pets => res.send(pets))
            .catch(next);       
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