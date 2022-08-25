const UserService = require('../services/User.service');

class UserController {
  constructor(service = new UserService()) {
    this.service = service;
  }

  async getAll(req, res, _next) {
    const result = await this.service.getAll();
    return res.status(200).json(result);
  }

  async create(req, res, next) {
    const { login, password } = req.body;
    try {
      const user = await this.service.create(login, password);
      if (!user) {
        return res.status(500).json({ message: 'internal error' });
      }
      return res.status(201).json(user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
    try {
      const userNewPass = await this.service.update(oldPassword, newPassword, id);
      return res.status(200).json(userNewPass);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async updateAccess(req, res, next) {
    const { id } = req.params;
    const { access } = req.body;
    try {
      const userNewAccess = await this.service.updateAccess(id, access);
      return res.status(200).json(userNewAccess);
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
      console.log(err);
      next(err);
    }
  }
}

module.exports = UserController;