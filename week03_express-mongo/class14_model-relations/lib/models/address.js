const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const request = require('superagent');

const schema = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String
});

schema.methods.populateFromZip = function() {
    const url = `https://www.zipcodeapi.com/rest/${process.env.ZIP_API_KEY}/info.json/97209/degrees`;
    return request.get(url)
        .then(({ body: lookup }) => {
            this.city = lookup.city;
            this.state = lookup.state;
        });
};

module.exports = mongoose.model('Address', schema);