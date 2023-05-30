//LIBRARIES
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const {connect} = require('./db/db')

//CONTROLLERS
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');



//USE METHODS
app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(cookie());


app.use('/', indexRouter)
app.use('/api/', apiRouter)


//CONNECT TO DB
connect();




module.exports = app