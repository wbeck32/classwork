const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['cat', 'dog', 'bird', 'lizard', 'fish', 'snake']
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    toys: [{
        type: Schema.Types.ObjectId,
        ref: 'Toy'
    }]
});

module.exports = mongoose.model('Pet', schema);