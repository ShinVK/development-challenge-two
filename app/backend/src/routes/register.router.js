const { Router } = require('express');

const UserController = require('../controllers/User.controller');

const { validateBodyUser, validateTokenUser } = require('../middlewares/user.middleware');

const userController = new UserController();

const registerRouter = Router();

registerRouter.post('/',
  validateBodyUser, (req, res, next) => userController.create(req, res, next));

registerRouter.put('/:id', validateTokenUser,
(req, res, next) => userController.update(req, res, next));

module.exports = registerRouter;