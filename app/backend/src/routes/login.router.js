const { Router } = require('express');

const LoginController = require('../controllers/Login.controller');

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post('/', (req, res, next) => loginController.postlogin(req, res, next));

module.exports = loginRouter;