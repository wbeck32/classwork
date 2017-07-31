const Router = require('express').Router;
const router = Router();
const Store = require('../models/store');
const Address = require('../models/address');

router
    .get('/', (req, res, next) => {
        Store.find()
            .lean()
            .then(stores => res.send(stores))
            .catch(next);
    })
    
    .get('/:id', (req, res, next) => {
        Store.getDetail(req.params.id)
            .then(store => res.send(store))
            .catch(next);
    })
    
    .post('/', (req, res, next) => {
        const { zip } = req.body;

        const address = new Address({ zip });
        address.populateFromZip()
            .then(() => {
                const store = new Store(req.body);
                store.address = address;
                return store.save();
            })
            .then(store => res.send(store))
            .catch(next);
    })
    
    .delete('/:id', (req, res, next) => {
        Store.verifyRemove(req.params.id)
            .then(store => res.send({ removed: !!store }))
            .catch(next);
    });


module.exports = router;