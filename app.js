//LIBRARIES
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const cookie = require('cookie-parser')
const {connect} = require('./db/db')

//CONTROLLERS
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user')


//USE METHODS
app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(cookie());
app.use(session({
    secret: process.env.SESSION_PASS,
    resave: true,
    saveUninitialized: true
}))

app.use('/', indexRouter)
app.use('/api/', apiRouter)
app.use('/user/', userRouter)

//CONNECT TO DB
connect();




module.exports = app