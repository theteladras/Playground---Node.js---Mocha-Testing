const expect = require('expect');
const utils = require('./utils');
it('should add two numbers', () => {
  let res = utils.add(12, 28);
  expect(res).toBe(40).toBeA('number');
});

it('square the number', () => {
  let res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('testing', () => {
  expect(10).toNotBe(11);
  expect([1,2,3]).toInclude(1);
  expect({animal: "dog"}).toNotEqual({animal: "cat"});
  expect({a: '1', b: '2', c: '3'}).toInclude({b: '2'});
});

it('first name and last name should be correct', () => {
  let user = { place: "Serbia", name: "Bob" };
  let res = utils.setName(user, "John Wick");
  expect(user).toInclude({ lastName: "Wick", firstName: "John" });
});

it('async add', (done) => {
  utils.sumAsync(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});
