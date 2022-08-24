const LoginService = require('../services/Login.service');

const loginService = new LoginService();

class LoginController {
  constructor(service = loginService) {
    this.service = service;
  }

  async postlogin(req, res, next) {
    const { login, password } = req.body;
    try {
      const result = await this.service.login(login, password);
      if (!result) {
        return res.status(500).json({ error: 'internal error' });
      }
      return res.status(201).json(result);
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }
}

module.exports = LoginController;