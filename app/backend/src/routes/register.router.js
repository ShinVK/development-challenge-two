const { Router } = require('express');

const UserController = require('../controllers/User.controller');

const userController = new UserController();

const registerRouter = Router();

registerRouter.post('/', (req, res, next) => userController.create(req, res, next));

module.exports = registerRouter;