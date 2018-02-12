const { Schema } = require('mongoose');
const createModel = require('./helpers/createModel');

const SUPPORTED_EXT = ['svg', 'png', 'jpg'];

exports.model = createModel({
  name: 'favicon',
  schema: {
    faviation_id: {
      index: true,
      required: true,
      type: Schema.Types.ObjectId,
    },
    size: {
      required: true,
      type: Number,
    },
    ext: {
      index: true,
      required: true,
      type: String,
      lowercase: true,
      trim: true,
      validator: (ext) => SUPPORTED_EXT.includes(ext),
    },
    data: {
      required: true,
      type: Buffer,
    },
  },
});
