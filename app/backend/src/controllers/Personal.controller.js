const PersonalService = require('../services/Personal.service');

class UserController {
  constructor(service = new PersonalService()) {
    this.service = service;
  }

  // async getAll(req, res, _next) {
  //   const result = await this.service.getAll();
  //   return res.status(200).json(result);
  // }

  async create(req, res, next) {
    const { id } = req.params;
    try {
      console.log('dd');
      const user = await this.service.create(id, req.body);
      if (!user) {
        return res.status(500).json({ message: 'internal error' });
      }
      return res.status(201).json(user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const user = await this.service.getOne(id);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // async update(req, res, next) {
  //   const { id } = req.params;
  //   const { oldPassword, newPassword } = req.body;
  //   console.log(req.body);
  //   try {
  //     const userNewPass = await this.service.update(oldPassword, newPassword, id);
  //     return res.status(200).json({ userNewPass });
  //   } catch (err) {
  //     console.log(err);
  //     next(err);
  //   }
  // }

  // async delete(req, res, next) {
  //   const { id } = req.params;
  //   try {
  //     await this.service.delete(id);
  //     return res.status(204);
  //   } catch (err) {
  //     console.log(err);
  //     next(err);
  //   }
  // }
}

module.exports = UserController;