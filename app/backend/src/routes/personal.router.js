const { Router } = require('express');

const { validateTokenUser } = require('../middlewares/user.middleware');
const PersonalController = require('../controllers/Personal.controller');

const personalController = new PersonalController();

const personalRouter = Router();

personalRouter.post('/:id', validateTokenUser,
  (req, res, next) => personalController.create(req, res, next));

// personalRouter.get('/:id', validateTokenUser,
//   (req, res, next) => personalController.
// ))

module.exports = personalRouter;