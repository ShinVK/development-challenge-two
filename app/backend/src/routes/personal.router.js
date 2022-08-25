const { Router } = require('express');

const { validateTokenUser } = require('../middlewares/user.middleware');
const { validateBodyPersonal } = require('../middlewares/personal.middleware');
const PersonalController = require('../controllers/Personal.controller');

const personalController = new PersonalController();

const personalRouter = Router();

personalRouter.post('/:id', validateTokenUser, validateBodyPersonal,
  (req, res, next) => personalController.create(req, res, next));

personalRouter.get('/:id', validateTokenUser,
  (req, res, next) => personalController.getOne(req, res, next));

personalRouter.put('/:id', validateTokenUser, validateBodyPersonal,
  (req, res, next) => personalController.update(req, res, next));

personalRouter.delete('/:id', validateTokenUser,
  (req, res, next) => personalController.delete(req, res, next));

module.exports = personalRouter;