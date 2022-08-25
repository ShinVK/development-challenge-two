const jwt = require('jsonwebtoken');
const err = require('../utils/errorbase');

const TOKENSECRET = process.env.SECRET;
class ValidateAdmin {
  constructor(req) {
    const { authorization: token } = req.headers;
    const { access } = req.body;
    this.token = token;
    this.access = access;
  }

  validateAccess() {
    console.log(this.access);
    if (this.access !== 'administrador' 
    && this.access !== 'medcloud' && this.access !== 'customer') {
      throw err('Invalid access', 400);
    }
  }

  authAuthentication() {
    if (!this.token) {
      throw err('token not found', 401);
    }
    const decoded = jwt.verify(this.token, TOKENSECRET);
    if (decoded.access !== 'administrator') {
      throw err('you are not authorized', 401);
    }
  }
}

const validateTokenAdmin = (req, _res, next) => {
  const validateAdmin = new ValidateAdmin(req);
  validateAdmin.authAuthentication();
  next();
};

const validateAccess = (req, _res, next) => {
  const validateAdmin = new ValidateAdmin(req);
  validateAdmin.validateAccess();
  next();
};

module.exports = {
  validateTokenAdmin,
  validateAccess,
};