const { URL } = require('url');

const express = require('express');
const mongoose = require('mongoose');

const config = require('../config');
const passport = require('./passport');

mongoose.connect(config.MONGO_URL);

const app = express();

app.use(require('cors')({
  origin: [config.API_HOST, config.APP_HOST].map(a => new RegExp(a)),
  credentials: true,
}));

app.use(require('morgan')('dev'));

app.use(require('body-parser').json());
app.use(require('express-session')({
  secret: config.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    domain: new URL(config.APP_HOST).hostname,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routers'));

app.use(require('./errors/handler'));

module.exports = app;
