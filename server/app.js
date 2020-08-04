var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pino = require('pino');
const mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const exit = process.exit;
// setting up logger
const l = pino({
    level: process.env.LOG_LEVEL || 'debug',
    name: process.env.APP_ID || ''
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// set up mongoose connection
mongoose.Promise = global.Promise;
const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
mongoose.connection.once('open', () => {
    l.info(`connected to MongoDB via Mongoose`);
});
mongoose.connection.on('error', (err) => {
    l.error(`unable to connect to Mongo via Mongoose`, err);
    exit(1);
});

// serve react app
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
