const db = require('./db');

module.exports.handleSignup = (email, password) => {
  return db.saveUser({ email, password });
};
