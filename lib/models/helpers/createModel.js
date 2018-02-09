const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = ({ name, schema: s, methods = {} }) => {
  const schema = new Schema(s, { timestamps: true });

  // register methods
  for (let [name, f] of Object.entries(methods)) {
    schema.static(name, f);
  }

  return mongoose.model(name, schema);
};
