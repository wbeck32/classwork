const jwt = require('jsonwebtoken-promisified');
// This is our app secret that enables our tokens to be "untampered with"
const appSecret = process.env.APP_SECRET || 'change-me';

module.exports = {
    sign(user) {

    },
    verify(token) {

    }
};