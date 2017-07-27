const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./address');
const Pet = require('./pet');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: Address.schema
});

schema.statics.getDetail = function(id) {
    return Promise.all([
        this.findById(id)
            .lean(),
        Pet.find({ store: id })
            .select('name type')
            .lean()
    ])
        .then(([store, pets]) => {
            store.pets = pets;
            return store;
        });
};

schema.statics.verifyRemove = function(id) {
    return Pet.existsFor(id)
        .then(exists => {
            if(exists) {
                throw { 
                    code: 400, 
                    error: 'Cannot remove store when it has pets'
                };
            }
            else return this.findByIdAndRemove(id);
        });
};

module.exports = mongoose.model('Store', schema);