const isEmail = require('../utils/isEmail');
const createModel = require('./helpers/createModel');

exports.model = createModel({
  name: 'User',
  schema: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validator: isEmail,
    },
    linked_accounts: {
      facebook: {
        id: {
          type: String,
          unique: true,
        },
      },
    },
  },
  methods: {
    async findOneOrCreate(query, user) {
      const u = await this.findOne(query);
      if (u) return u;
      return await this.create(user);
    },
  },
});

exports.FACEBOOK_ID_PATH = 'linked_accounts.facebook.id';
