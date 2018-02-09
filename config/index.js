require('dotenv').config();
const pickKeys = require('lodash.pick');

const DEFAULTS = (process.env.NODE_ENV === 'production')?
  {
    PROTOCOL: 'https',
    HOST: 'api.faviator.xyz',
  }:
  {
    PROTOCOL: 'http',
    HOST: 'api.staging.faviator.xyz',
  };

module.exports = {
  ...DEFAULTS,
  ...pickKeys(process.env, [
    // site configs
    'NODE_ENV',
    'PROTOCOL',
    'HOST',

    // database
    'MONGO_URL',

    // facebook
    'FACEBOOK_APP_ID',
    'FACEBOOK_APP_SECRET',
  ]),
};
