const errs = require('./index');

const presentError = (message) => ({
  error: {
    message,
  },
});

module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (Object.values(errs).includes(err)) return res.status(err.code).json(presentError(err.message));

  console.error(err);
  res.status(500).end('Opps, there is Sum Ting Wrong.');
};
