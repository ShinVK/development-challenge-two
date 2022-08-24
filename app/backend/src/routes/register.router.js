const { Router } = require('express');

const UserController = require('../controllers/User.controller');

const { validateBodyUser } = require('../middlewares/user.middleware');

const userController = new UserController();

const registerRouter = Router();

registerRouter.post('/',
  validateBodyUser, (req, res, next) => userController.create(req, res, next));

module.exports = registerRouter;