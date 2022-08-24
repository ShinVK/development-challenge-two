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

  async update(id, informations) {
    await this.model.update(informations, { where: {
      userId: id,
    } });
    const updatedPersonal = await this.model.findOne({
      where: { userId: id },
    });

    if (!updatedPersonal) throw Err('user not found', 404);
    return updatedPersonal;
  }

  async getOne(userId) {
    const verifyUser = await this.model.findOne({ where: { userId } });

    if (!verifyUser) throw Err('User not found', 404);

    const { id } = verifyUser;
    const userDetailed = await this.model.findByPk(id, {
      include: [
        { model: User,
          as: 'user',
          attributes: ['id', 'login', 'access'] },
      ],
    });
    
    return userDetailed;
  }

  async delete(userId) {
    const verifyUser = await this.model.findOne({ where: { userId } });

    if (!verifyUser) throw Err('User not found', 404);
    const { id } = verifyUser;
    await this.model.destroy({ where: { id } });
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