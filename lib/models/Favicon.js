const { Schema } = require('mongoose');
const createModel = require('./helpers/createModel');

exports.SUPPORTED_FORMATS = ['svg', 'png', 'jpg'];

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
    format: {
      index: true,
      required: true,
      type: String,
      lowercase: true,
      trim: true,
      validator: (format) => exports.SUPPORTED_FORMATS.includes(format),
    },
    data: {
      required: true,
      type: Buffer,
    },
  },
});
