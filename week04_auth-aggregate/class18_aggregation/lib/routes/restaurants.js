const Router = require('express').Router;
const router = Router();
const Restaurant = require('../models/restaurant');

router
    .get('/', (req, res, next) => {
        Restaurant.find()
            .lean()
            .limit(100)
            .then(restaurants => res.send(restaurants))
            .catch(next);
    })
    .get('/top', (req, res, next) => {
        Restaurant.getTop(req.query)
            .then(top => res.send(top))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Restaurant.findById(req.params.id)
            .lean()
            .then(restaurant => res.send(restaurant))
            .catch(next);
    });

module.exports = router;
