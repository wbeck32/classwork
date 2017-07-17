const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require(../lib/server.js);
const {assert} chai;

describe.('server', () => {
	const.request = chai.request(app);
	it('says hello world', done => {
		request.get('/')
		.end((err, res) => {
			if(err) return done(err);
			assert.equal(res.text, 'howdy');
			done();

		})
	})
})
