const Router = require('express').Router;
const router = Router();
const Pet = require('../models/pet');

router
    .get('/', (req, res, next) => {
        Pet.find()
            .lean()    
            .select('name legs store')    
            .populate({
                path: 'store',
                select: 'name'
            }) 
            .then(pets => res.send(pets))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Pet.findById(id)
            .lean()
            .populate('toys store')
            .then(pet => {
                if (!pet) throw { code: 404, error: `${id} not found` };
                else res.send(pet);
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Pet(req.body)
            .save()
            .then(pet => res.send(pet))
            .catch(next);
    })

    .put('/:id/toys', (req, res, next) => {
        Pet.findById(req.params.id)
            .then(pet => {
                const newToyId = req.body.id;
                const toys = pet.toys;
                const hasToy = toys.some(t => t == newToyId);
                if (hasToy) return pet;

                pet.toys.push(newToyId);
                return pet.save();
            })
            .then(pet => {
                res.send(pet);
            })
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
            .then(response => {
                res.send({ removed: !!response });
            })
            .catch(next);
    });


module.exports = router;