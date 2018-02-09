const config = require('config');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook');

const User = require('../models/User');

const loginCallback = async (accessToken, refreshToken, {
  id,
  displayName: name,
  emails: [ email ],
}, done) => {
  const query = { 'social.facebook.id': id };
  const user = await User.findOneOrCreate(query, {
    name,
    email,
    linked_accounts: {
      facebook: {
        id,
      },
    },
  });

  done();

  return user;
};

passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: `${config.PROTOCOL}://${config.HOST}/auth/facebook/callback`,
}, loginCallback));
