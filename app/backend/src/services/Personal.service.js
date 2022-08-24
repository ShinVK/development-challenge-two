require('dotenv').config();

const { PersonalData, User } = require('../database/models');
const Err = require('../utils/errorbase');

class PersonalService {
  constructor(model = PersonalData) {
    this.model = model;
  }

  async create(id, { firstName, lastName, email,
    birthDate, city, state }) {
    const verifyUser = await this.model.findOne({ where: { userId: id } });
    if (verifyUser) {
      throw Err('This user already registered', 409);
    }
    console.log(verifyUser);
    const newUser = await this.model.create({
      firstName,
      lastName,
      email,
      birthDate,
      city,
      state,
      userId: Number(id),
    });

    return { newUser };
  }

  async getOne(id) {
    const verifyUser = await this.model.findOne({ where: { userId: id } }, {
      include: [
        { model: User, as: 'userId', attributes: ['id', 'login', 'access'] },
      ],
    });
    if (!verifyUser) throw Err('User not found', 404);
    return verifyUser;
  }

  // async update(oldPassword, password, id) {
  //   const user = await this.model.findByPk(id);

  //   const hashOldPass = md5(oldPassword);
  //   if (user.password !== hashOldPass) {
  //     throw Err('Wrong password', 400);
  //   }
  
  //   if (!user) {
  //     throw Err('Could not found a user with this ID', 404);
  //   }

  //   const hashNewPass = md5(password);
  //   const userNewPass = await this.model.findByPk(id);
  //   await this.model.update({ password: hashNewPass }, { where: { id } });
  //   return userNewPass;
  // }

  // async delete(id) {
  //   const user = await this.model.findByPk(id);
  //   if (!user) throw Err('User not found', 404);

  //   await this.model.destroy({ where: { id } });
  // }

  // async getAll() {
  //   const users = await this.model.findAll({ attributes: ['id', 'login', 'access'] });
  //   return users;
  // }
}

module.exports = PersonalService;