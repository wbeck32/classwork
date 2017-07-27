const Router = require('express').Router;
const router = Router();
const Store = require('../models/store');
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {

    })
    
    .get('/:id', (req, res, next) => {

            
    })
    
    .post('/', (req, res, next) => {
        new Store(req.body)
            .save()
            .then(store => res.send(store))
            .catch(next);
    })
    
    .delete('/:id', (req, res, next) => {
        Store.findByIdAndRemove(req.params.id)
            .then(store => res.send({ removed: !!store }))
            .catch(next);
    });


module.exports = router;