const jwt = require('jsonwebtoken');
const err = require('../utils/errorbase');

const TOKENSECRET = process.env.SECRET;

class ValidateMedical {
  constructor(req) {
    const { weight, height } = req.body;
    const { authorization: token } = req.headers;
    this.weight = weight;
    this.height = height;
    this.token = token;
  }

  validate() {
    this.isHeightValid();
    this.isWeightValid();
  }

  isHeightValid() {
    if (!this.height) throw err('height is required', 400);
    if (typeof this.height !== 'number') throw err('height must be a number', 400);
    if (this.height < 10) throw err('height must be bigger than 10', 400);
  }

  isWeightValid() {
    if (!this.weight) throw err('weight is required', 400);
    if (typeof this.weight !== 'number') throw err('weight must be a number', 400);
    if (this.weight < 0) throw err('weight must be bigger than 0', 400);
  }

  authAuthentication() {
    if (!this.token) {
      throw err('token not found', 401);
    }
    const decoded = jwt.verify(this.token, TOKENSECRET);

    if (decoded.access !== 'medcloud') {
      throw err('you are not authorized', 401);
    }
  }
}

const validateBodyMedical = (req, _res, next) => {
  const validateMedical = new ValidateMedical(req);
  validateMedical.validate();
  next();
};

const validateMedicalToken = (req, _res, next) => {
  const validateMedical = new ValidateMedical(req);
  validateMedical.authAuthentication();
  next();
};

module.exports = {
  validateBodyMedical,
  validateMedicalToken,
};