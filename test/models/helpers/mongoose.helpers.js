const mongoose = require('mongoose');

const connectFresh = async (url) => {
  await mongoose.connect(url); 
  await cleanup();
};

const disconnect = () => mongoose.disconnect();

const cleanup = () => {
  return Promise.all(Object.values(mongoose.connection.models).map(m => m.remove({})));
};

module.exports = {
  connectFresh,
  disconnect,
  cleanup,
};
