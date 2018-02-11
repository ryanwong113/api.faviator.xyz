const config = require('../config');

const express = require('express');

const mongoose = require('mongoose');
const passport = require('./passport');

mongoose.connect(config.MONGO_URL);

const app = express();

app.use(require('morgan')('dev'));

app.use(require('body-parser').json());
app.use(require('express-session')({
  secret: config.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    domain: config.APP_HOST,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/router'));

app.use((err, req, res, done) => {
  console.error(err);
  res.end('Opps, there is sum ting wong.');
  done();
});

module.exports = app;
