const isEmail = require('../utils/isEmail');
const createModel = require('./helpers/createModel');

module.exports = createModel({
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
