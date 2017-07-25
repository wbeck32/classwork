const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;

const app = require('../lib/app');

const request = chai.request(app);

describe('tested vanilla http', () => {

    it('GET /coder', () => {
        return request.get('/coder')
            .then(res => {
                assert.deepEqual(res.body, { name: 'martypdx', since: 1999 });
            });
    });

    it('GET says hello', () => {
        return request.get('/')
            .then(res => {
                assert.equal(res.text, '<p>Hello World</p>');
            })
    })

});