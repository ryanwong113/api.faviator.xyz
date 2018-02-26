const MongodbMemoryServer = require('mongodb-memory-server').default;
const config = require('../../config');
const mongoose = require('mongoose');

const mongod = new MongodbMemoryServer();

const connect = async () => {
  const uri = await mongod.getConnectionString();
  mongoose.connect(uri);
};

const destroy = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongod.stop();
};

const cleanup = () => {
  return Promise.all(Object.values(mongoose.connection.models).map(m => m.remove({})));
};

exports.install = () => {
  beforeAll(connect);
  beforeEach(cleanup);

  afterAll(destroy);
};
