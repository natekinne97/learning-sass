const express = require('express');
const emailRouter = require('./email/emailService');
const bodyParser = require('body-parser');
const app = express();


app.use('/email', emailRouter);

module.exports = app;