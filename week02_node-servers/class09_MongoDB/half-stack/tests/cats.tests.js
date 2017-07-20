const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;

const connection = require('../lib/db');
const url = 'mongodb://localhost:27017/meow-test';

const app = require('../lib/app');

describe('cats resource', () => {

    before(() => connection.connect(url));
    before(() => connection.db.dropDatabase());

    const request = chai.request(app);

    it('saves', () => {
        const cat = { name: 'felix', type: 'tuxedo' };
        return request.post('/cats')
            .send(cat)
            .then(res => {
                const saved = res.body;
                assert.ok(saved._id);
                assert.equal(saved.name, cat.name);
                assert.equal(saved.type, cat.type);
            })
    });
});