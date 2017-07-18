const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

describe('http server', () => {

    const request = chai.request(app);

    it('posts data', done => {
        const person = { name: 'jane', email: 'jane@jane.com' };
        request
            .post('/')
            .send(person)
            .end((err, res) => {
                assert.equal(res.body.email, person.email);
                assert.equal(res.body.name, 'Wild Wild William');
                done();
            });
    });
});