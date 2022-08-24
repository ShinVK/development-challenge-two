require('dotenv').config();
const { sign } = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models');
const Err = require('../utils/errorbase');

const TOKENSECRET = process.env.SECRET;

class UserService {
  constructor(model = User) {
    this.model = model;
  }

  async create(login, password) {
    const verifyLogin = await this.model.findOne({ where: { login } });
    if (verifyLogin) {
      throw Err('This login already registered', 409);
    }

    const hashedPassword = md5(password);

    const newUser = await User.create({
      login,
      password: hashedPassword,
      access: 'customer',
    });

    const token = sign({
      access: newUser.access,
      login: newUser.login,
    }, TOKENSECRET, {
      subject: String(newUser.id),
      expiresIn: '1d',
    });

    return { user: { ...newUser.dataValues }, token };
  }

  async update(oldPassword, password, id) {
    const user = await this.model.findByPk(id);

    const hashOldPass = md5(oldPassword);
    if (user.password !== hashOldPass) {
      throw Err('Wrong password', 400);
    }
  
    if (!user) {
      throw Err('Could not found a user with this ID', 404);
    }

    const hashNewPass = md5(password);
    const userNewPass = await this.model.findByPk(id);
    await this.model.update({ password: hashNewPass }, { where: { id } });
    return userNewPass;
  }
}

module.exports = UserService;