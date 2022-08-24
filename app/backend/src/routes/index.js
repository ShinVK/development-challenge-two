const { Router } = require('express');
const loginRouter = require('./login.router');

const router = Router();

router.use('/login', loginRouter);
// router.use('/register');
// router.use('/diseases');
// router.use('/admin');
// router.use('/personal');
// router.use('/medical');

module.exports = router;