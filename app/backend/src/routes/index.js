const { Router } = require('express');
const loginRouter = require('./login.router');
const registerRouter = require('./register.router');
const personalRouter = require('./personal.router');
const adminRouter = require('./admin.router');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/admin', adminRouter);
router.use('/personal', personalRouter);
// router.use('/medical');

module.exports = router;