const passport = require('passport');

exports.login = passport.authenticate('facebook', { scope: 'email' });

exports.callback = passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' });
