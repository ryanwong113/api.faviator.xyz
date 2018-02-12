const express = require('express');
const mongoose = require('mongoose');

const config = require('../config');

mongoose.connect(config.MONGO_URL);

const app = express();

app.use(require('cors')({
  origin: [config.API_HOST, config.APP_HOST].map(a => new RegExp(a)),
  credentials: true,
}));

app.use(require('morgan')('dev'));

app.use(require('body-parser').json());
app.use(require('./middlewares/session'));

app.use(require('./middlewares/passport'));

app.use(require('./routers'));

app.use(require('./errors/handler'));

module.exports = app;
