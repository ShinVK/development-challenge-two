const { Router } = require('express');

const UserController = require('../controllers/User.controller');

const {
  validateBodyUser,
  validateTokenUser,
  validatePassUser } = require('../middlewares/user.middleware');

const userController = new UserController();

const registerRouter = Router();

registerRouter.post('/',
  validateBodyUser, (req, res, next) => userController.create(req, res, next));

registerRouter.put('/:id', validateTokenUser, validatePassUser,
(req, res, next) => userController.update(req, res, next));

registerRouter.delete('/:id', validateTokenUser,
  (req, res, next) => userController.delete(req, res, next));

module.exports = registerRouter;