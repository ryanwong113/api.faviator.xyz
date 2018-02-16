const config = require('../../../config');

const FacebookStrategy = require('passport-facebook');

const { userService } = require('../../services');

const loginCallback = (accessToken, refreshToken, fb_user, done) => {
  return userService.loginWithFacebook(fb_user)
    .then(user => done(null, user))
    .catch(done);
};

module.exports = new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: `${config.PROTOCOL}://${config.API_HOST}/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'email'],
}, loginCallback);
