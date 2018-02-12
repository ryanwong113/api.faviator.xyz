const errs = require('./index');

module.exports = [
  (error, req, res, next) => { // eslint-disable-line no-unused-vars
    if (!(error.type in errs)) return next(error);
    res.status(error.code).json({ error });
  },
  (err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(err);
    res.status(500).end('Opps, there is Sum Ting Wrong.');
  },
];
