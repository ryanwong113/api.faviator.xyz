const config = require('../config');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(config.MONGO_URL);

const app = express();

app.get('/', (req, res) => res.end('Hello World!'));
app.use('/auth', require('./routes/auth/router'));

module.exports = app;
