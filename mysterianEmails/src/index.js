require('dotenv')
const express = require('express');
// loggers
const helmet = require('helmet');
const morgan = require('morgan');
const emailRouter = require('./email/emailService');
const info = require('./InfoRequest/InfoRequest');
const {NODE_ENV} = require('./config');
const cors = require('cors');
const app = express();

// loggers
app.use(helmet());
app.use(morgan((NODE_ENV ==='production')? 'tiny' : 'common', {
    skip: ()=>NODE_ENV === 'test'
}));

// cors
app.use(cors());

app.use('/email', emailRouter);
app.use('/info', info);

module.exports = app;