const { Router } = require('express');
const loginRouter = require('./login.router');
const registerRouter = require('./register.router');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
// router.use('/diseases');
// router.use('/admin');
// router.use('/personal');
// router.use('/medical');

module.exports = router;