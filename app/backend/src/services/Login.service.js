const md5 = require('md5');
const { sign, verify } = require('jsonwebtoken');
const { User } = require('../database/models');
const err = require('../utils/errorbase');

const TOKENSECRET = process.env.SECRET;

class LoginService {
  constructor(model = User) {
    this.model = model;
  }

  async login(login, password) {
    const user = await this.model.findOne({ where: { login } });
    console.log(user);
    if (!user) {
      throw err('Could not found a user with this login', 404);
    }

    const hashPassword = md5(password);
    if (hashPassword !== user.password) {
      throw err('Incorrect login or password', 404);
    }

    const token = sign({
      access: user.access,
      login: user.login,
    }, TOKENSECRET, {
      subject: String(user.id),
      expiresIn: '1d',
    });

    const decoded = verify(token, TOKENSECRET);
    console.log(decoded);
    return { user: {
      id: user.id,
      login: user.login,
      access: user.access,
    },
token };
  }
}

module.exports = LoginService;