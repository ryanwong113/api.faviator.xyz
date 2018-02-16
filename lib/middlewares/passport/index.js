const { userService } = require('../../services');
const passport = require('passport');

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userService.findById(id);
    done(null, user);
  } catch (e) {
    done(e);
  }
});

passport.use(require('./facebook'));

module.exports = [passport.initialize(), passport.session()];
