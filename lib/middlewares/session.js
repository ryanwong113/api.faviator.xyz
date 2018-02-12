const { URL } = require('url');

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const config = require('../../config');

module.exports = session({
  secret: config.SESSION_SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { domain: new URL(config.APP_HOST).hostname },
  resave: true,
  saveUninitialized: true,
});
