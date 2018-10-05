const request = require('supertest');
const expect = require('expect');


const app = request('http://localhost:3000');

describe('GET method', () => {
  it('test rout', (done) => {
    app.get('/').
      expect(200).
      expect(res => { expect(res.body).toInclude({ data: true }); }).
      end(done);
  });
});
