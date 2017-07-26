const mongoose = require('mongoose');
// require the Schema "class" so we can make a schema instance
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        enum: ['gold', 'silver', 'rainbow']
    },
    address: {
        street: String,
        city: String,
        zip: String
    },
    candy: [{
        name: { 
            type: String,
            required: true
        },
        sugar: Number
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Unicorn', schema);