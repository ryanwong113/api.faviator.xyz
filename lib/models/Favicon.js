const { Schema } = require('mongoose');
const createModel = require('./helpers/createModel');

exports.Favicon = createModel({
  name: 'favicon',
  schema: {
    images: [Buffer],
    config: {
      type: Object,
      required: true,
    },
    creator_uid: {
      index: true,
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
});
