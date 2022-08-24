const UserService = require('../services/User.service');

class UserController {
  constructor(service = new UserService()) {
    this.service = service;
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
    console.log(req.body);
    try {
      const userNewPass = await this.service.update(oldPassword, newPassword, id);
      return res.status(200).json({ userNewPass });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UserController;