const Router = require('express').Router;
const router = Router();
const Store = require('../models/store');
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {
        Store.find()
            .lean()
            .then(stores => res.send(stores))
            .catch(next);
    })
    
    .get('/:id', (req, res, next) => {
        // Add child "Pet" data to 
        // parent "Store" by fetching
        // child data and appending to 
        // parent object
        const storeId = req.params.id;
        Promise.all([
            Store.findById(storeId)
                .lean(),
            Pet.find({ store: storeId })
                .select('name type')
                .lean()
        ])
            .then(([store, pets]) => {
                store.pets = pets;
                res.send(store);
            })
            .catch(next);
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