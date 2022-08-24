const { Router } = require('express');
const loginRouter = require('./login.router');
const registerRouter = require('./register.router');
const personalRouter = require('./personal.router');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
// router.use('/diseases');
// router.use('/admin');
router.use('/personal', personalRouter);
// router.use('/medical');

module.exports = router;