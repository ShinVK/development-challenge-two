const express = require('express');
// const router = require('../routes/index');
// const errorMiddleware = require('../middlewares/error.middleware');
// const Cors = require('../middlewares/cors.middleware');

const app = express();
app.use(express.json());

module.exports = app;