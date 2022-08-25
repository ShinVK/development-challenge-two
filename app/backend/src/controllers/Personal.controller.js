const PersonalService = require('../services/Personal.service');

class PersonalController {
  constructor(service = new PersonalService()) {
    this.service = service;
  }

  async getAll(req, res, next) {
    try {
      const users = await this.service.getAll();
      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async getAllUsers(req, res, _next) {
    const users = await this.service.getAllUsers();
    return res.status(200).json(users);
  }

  async create(req, res, next) {
    const { id } = req.params;
    try {
      const user = await this.service.create(id, req.body);
      if (!user) {
        return res.status(500).json({ message: 'internal error' });
      }
      return res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const user = await this.service.getOne(id);
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const informations = req.body;
    try {
      const updatedPersonal = await this.service.update(id, informations);

      return res.status(200).json(updatedPersonal);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await this.service.delete(id);

      return res.status(204);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PersonalController;