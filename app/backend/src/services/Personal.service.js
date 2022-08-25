require('dotenv').config();

const { PersonalData, User } = require('../database/models');
const Err = require('../utils/errorbase');

class PersonalService {
  constructor(model = PersonalData) {
    this.model = model;
  }

  async getAll() {
    const personalData = await this.model.findAll({
      include: [
        { model: User,
          as: 'user',
          attributes: ['id', 'login', 'access'] },
      ] });
    return personalData;
  }

  async getAllUsers() {
    const personalData = await this.model.findAll({
      exclude: ['createdAt', 'updatedAt'], 
    });
    return personalData;
  }

  async create(id, { firstName, lastName, email,
    birthDate, city, state }) {
    const verifyUser = await this.model.findOne({ where: { userId: id } });
    if (verifyUser) {
      throw Err('This user already registered', 409);
    }

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
}

module.exports = PersonalService;