[
  'findOne',
  'findFavicon',
  'create',
  'createFavicon',
].forEach(n => exports[n] = require(`./${n}`));
