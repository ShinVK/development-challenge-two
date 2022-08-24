const err = require('../utils/errorbase');

class ValidateUser {
  constructor(req) {
    const { firstName, lastName, email, birthDate, city, state } = req.body;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.city = city;
    this.state = state;
  }

  validate() {
    this.isNameValid();
    this.isEmailValid();
    this.otherFields();
  }

  isNameValid() {
    if (!this.firstName) throw err('first name is required', 400);
    if (!this.lastName) throw err('last name is required', 400);
    if (!this.birthDate) throw err('birthDate is required', 400);
  }

  isEmailValid() {
    if (!this.email) throw err('email is required', 400);
    const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+.[a-z]+(.[a-z]+)?$/i;
    const validate = emailRegex.test(this.email);

    if (!validate) throw err('"email" must be a valid email', 400);
  }

  otherFields() {
    if (!this.city) throw err('city is required', 400);
    if (!this.state) throw err('state is required', 400);
  }
}

const validateBodyPersonal = (req, _res, next) => {
  const validateUser = new ValidateUser(req);
  validateUser.validate();
  next();
};

module.exports = {
  validateBodyPersonal,
};