const { Router } = require('express');

const LoginController = require('../controllers/login.controller');

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post('/', loginController.postlogin);

module.exports = loginRouter;