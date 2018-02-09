const { install } = require('../helpers/mongo');

describe('Models', () => {
  install();

  describe('User', require('./User.model.spec'));
});
