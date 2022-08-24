const jwt = require('jsonwebtoken');
const err = require('../utils/errorbase');

const TOKENSECRET = process.env.SECRET;
class ValidateUser {
  constructor(req) {
    const { id } = req.params;
    const { authorization: token } = req.headers;
    const { login, password, oldPassword, newPassword } = req.body;
    this.login = login;
    this.password = password;
    this.id = id;
    this.token = token;
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
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

  authAuthentication() {
    if (!this.token) {
      throw err('token not found', 401);
    }
    const decoded = jwt.verify(this.token, TOKENSECRET);
    if (this.id !== decoded.sub) {
      throw err('you are not authorized', 401);
    }
  }

  updatePass() {
    if (!this.oldPassword) throw err('you need to pass your old password', 400);
    if (!this.newPassword) throw err('you need to pass a new password', 400);
    if (this.newPassword.length < 5) throw err('password must be 5 or more characters long', 400);
  }
}

const validateBodyUser = (req, _res, next) => {
  const validateUser = new ValidateUser(req);
  validateUser.validate();
  next();
};

const validateTokenUser = (req, _res, next) => {
  const validateUser = new ValidateUser(req);
  validateUser.authAuthentication();
  validateUser.updatePass();
  next();
};

module.exports = {
  validateBodyUser,
  validateTokenUser,
};