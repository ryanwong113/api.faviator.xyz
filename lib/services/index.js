const { User, Faviation, Favicon } = require('../models');
const faviator = require('faviator');
const UserService = require('./UserService');
const FaviationService = require('./FaviationService');

module.exports = {
  userService: new UserService(User),
  faviationService: new FaviationService(Faviation, Favicon, faviator),
};
