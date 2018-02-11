const config = require('../../config');
const mongoose = require('mongoose');

const connect = () => mongoose.connect(config.MONGO_TEST_URL);

const destroy = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
};

const cleanup = () => {
  return Promise.all(Object.values(mongoose.connection.models).map(m => m.remove({})));
};

exports.install = () => {
  beforeAll(connect);
  beforeEach(cleanup);

  afterAll(destroy);
};
