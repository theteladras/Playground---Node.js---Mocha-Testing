const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./index');


describe('spies', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  expect.createSpy();
  it('should call spies', () => {
    let spy = expect.createSpy();
    spy(11);
    expect(spy).toHaveBeenCalledWith(11);
  });

  it('call saveUsers with given variables', () => {
    let email = 'asd@asd.com';
    let pa = 'test';
    app.handleSignup(email, pa);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password: pa });
  });
});
