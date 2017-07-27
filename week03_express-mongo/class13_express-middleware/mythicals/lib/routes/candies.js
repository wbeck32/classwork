const express = require('express');
const router = express.Router();
const Unicorn = require('../models/unicorn');
const jsonParser = require('body-parser').json();

router
    .post('/', jsonParser, (req, res) => {
        Unicorn.findByIdAndUpdate(req.params.id, {
            $push: { candy: req.body }
        }, { 
            new: true, 
            runValidators: true 
        })
            .then(unicorn => res.send(unicorn))
            .catch(console.log);
    });


module.exports = router;