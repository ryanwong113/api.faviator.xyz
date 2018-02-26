require('dotenv').config();
const pickKeys = require('lodash.pick');

const DEFAULTS = (process.env.NODE_ENV === 'production')?
  {
    PROTOCOL: 'https',
    APP_HOST: 'faviator.xyz',
    API_HOST: 'api.faviator.xyz',
  }:
  {
    PROTOCOL: 'http',
    APP_HOST: 'staging.faviator.xyz',
    API_HOST: 'api.staging.faviator.xyz',
  };

module.exports = {
  ...DEFAULTS,
  ...pickKeys(process.env, [
    // site configs
    'NODE_ENV',
    'PROTOCOL',
    'APP_HOST',
    'API_HOST',
    'SESSION_SECRET',

    // database
    'MONGO_URL',

    // facebook
    'FACEBOOK_APP_ID',
    'FACEBOOK_APP_SECRET',
  ]),
};
