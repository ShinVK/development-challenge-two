const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const PersonalController = require('../controllers/Personal.controller');
const { validateTokenAdmin, validateAccess } = require('../middlewares/admin.middleware');

const userController = new UserController();
const personalController = new PersonalController();
const adminRouter = Router();

// Admin vai poder atualizar o access do user, deletar o user, deletar o personal e deletar o medical

adminRouter.put('/user/:id', validateTokenAdmin, validateAccess,
  (req, res, next) => userController.updateAccess(req, res, next));

adminRouter.get('/user', validateTokenAdmin,
  (req, res, next) => userController.getAll(req, res, next));

adminRouter.delete('/user/:id', validateTokenAdmin,
  (req, res, next) => userController.delete(req, res, next));

adminRouter.get('/personal', validateTokenAdmin,
  (req, res, next) => personalController.getAll(req, res, next));

adminRouter.delete('/personal/:id', validateTokenAdmin,
  (req, res, next) => personalController.delete(req, res, next));

module.exports = adminRouter;
