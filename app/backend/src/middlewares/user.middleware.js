const err = require('../utils/errorbase');

class ValidateUser {
  constructor(req) {
    const { login, password } = req.body;
    this.login = login;
    this.password = password;
  }

  validate() {
    this.isLoginValid();
    this.isPassValid();
  }

  isPassValid() {
    if (!this.password) throw err('password is required', 400);
    if (this.password.length < 5) throw err('password must be 5 or more characters long');
  }

  isLoginValid() {
    if (!this.login) throw err('login is required', 400);
    if (this.login.length < 5) throw err('login must be 5 or more characters long');
  }
}

const validateBodyUser = (req, _res, next) => {
  const validateUser = new ValidateUser(req);
  validateUser.validate();
  next();
};

module.exports = {
  validateBodyUser,
};