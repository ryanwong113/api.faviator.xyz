const { User } = require('../models/User');
const passport = require('passport');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (e) {
    done(e);
  }
});

passport.use(require('./strategies/facebook'));

module.exports = passport;
