const { Schema } = require('mongoose');
const createModel = require('./helpers/createModel');

exports.model = createModel({
  name: 'faviation',
  schema: {
    favicons: {
      default: [],
      type: [Schema.Types.ObjectId],
    },
    config: {
      type: Object,
      required: true,
    },
    creator_uid: {
      index: true,
      required: true,
      type: Schema.Types.ObjectId,
    },
  },
});
