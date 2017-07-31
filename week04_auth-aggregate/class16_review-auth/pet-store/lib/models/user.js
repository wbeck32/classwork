const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const schema = new Schema({
    
});

// schema.static('exists', function (query) {
//     return this.find(query)
//         .count()
//         .then(count => (count > 0));
// });

module.exports = mongoose.model('User', schema);