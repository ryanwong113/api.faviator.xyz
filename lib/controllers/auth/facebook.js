const config = require('../../../config');
const passport = require('passport');

exports.login = passport.authenticate('facebook', { scope: 'email' });

exports.callback = passport.authenticate('facebook', {
  successRedirect: `${config.PROTOCOL}://${config.APP_HOST}/dashboard`,
  failureRedirect: `${config.PROTOCOL}://${config.APP_HOST}/login`,
  failureFlash: 'Something went wrong... Please try again...',
});
