const Router = require('express').Router;
const router = Router();
const User = require('../models/user');

router
    .get('/favorites', (req, res, next) => {
        User.findById(req.user.id)
            .select('favorites')
            .lean()
            .populate('favorites')
            .then(user => {
                res.send(user.favorites);
            })
            .catch(next);
    })
    
    .post('/favorites', (req, res, next) => {
        User.findByIdAndUpdate(req.user.id, {
            $addToSet: { favorites: req.body.petId }
        }, { new: true })
        .then(user => res.send(user.favorites))
        .catch(next);
    })

    .delete('/favorites/:id', (req, res, next) => {
        
    });

module.exports = router;