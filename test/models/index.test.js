require('dotenv').config();

const { connectFresh, disconnect, cleanup } = require('./helpers/mongoose.helpers');

const { MONGO_TEST_URL } = process.env;
describe('Models', () => {
  beforeAll(async () => await connectFresh(MONGO_TEST_URL));

  afterAll(disconnect);

  beforeEach(cleanup);

  describe('User', require('./User.model.spec'));
});
