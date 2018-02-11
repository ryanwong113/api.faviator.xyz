const config = require('../../../config');

const FacebookStrategy = require('passport-facebook');

const { User, FACEBOOK_ID_PATH } = require('../../models/User');

const loginCallback = async (accessToken, refreshToken, {
  id,
  displayName: name,
  emails: [ { value: email } ],
}, done) => {
  const query = { [FACEBOOK_ID_PATH]: id };
  const new_user = {
    name,
    email,
    linked_accounts: { facebook: { id } },
  };

  try {
    const user = await User.findOneOrCreate(query, new_user);
    done(null, user);
  } catch (e) {
    done(e);
  }
};

module.exports = new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: `${config.PROTOCOL}://${config.API_HOST}/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'photos', 'email'],
}, loginCallback);
