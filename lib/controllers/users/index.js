[
  'findMe',
  'findOne',
].forEach(n => exports[n] = require(`./${n}`));
