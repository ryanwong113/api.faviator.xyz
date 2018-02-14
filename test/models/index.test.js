const { install } = require('../helpers/mongo');

describe('Models', () => {
  install();

  [
    'User',
  ].forEach(n => describe(n, require(`./${n}.spec`)));
});
