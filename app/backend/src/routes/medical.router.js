const { Router } = require('express');

const { validateBodyMedical, validateMedicalToken } = require('../middlewares/medical.middleware');
const MedicalController = require('../controllers/Medical.controller');
const PersonalController = require('../controllers/Personal.controller');

const personalController = new PersonalController();
const medicalController = new MedicalController();

const medicalRouter = Router();

medicalRouter.post('/:id', validateMedicalToken, validateBodyMedical,
  (req, res, next) => medicalController.create(req, res, next));

medicalRouter.get('/user/:id', validateMedicalToken,
  (req, res, next) => medicalController.getOne(req, res, next));

medicalRouter.put('/:id', validateMedicalToken, validateBodyMedical,
  (req, res, next) => medicalController.update(req, res, next));

medicalRouter.delete('/:id', validateMedicalToken,
  (req, res, next) => medicalController.delete(req, res, next));

medicalRouter.get('/customers', validateMedicalToken,
  (req, res, next) => personalController.getAllUsers(req, res, next));

module.exports = medicalRouter;