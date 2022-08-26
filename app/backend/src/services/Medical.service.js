const { MedicalProfile, User } = require('../database/models');
const Err = require('../utils/errorbase');

class MedicalService {
  constructor(model = MedicalProfile) {
    this.model = model;
  }

  async getAll() {
    const medicalProfile = await this.model.findAll();
    return medicalProfile;
  }

  async create(id, { weight, height, observations }) {
    const verifyUser = await this.model.findOne({ where: { userId: id } });
    if (verifyUser) {
      throw Err('This medical data already registered', 409);
    }

    const newUser = await this.model.create({
      weight,
      height,
      observations,
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

module.exports = MedicalService;
