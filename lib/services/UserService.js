const { isValidObjectId } = require('../models/helpers');
const { FACEBOOK_ID_PATH } = require('../models/User');

class UserService {
  constructor(User) {
    this.User = User;
  }

  async findById(id) {
    if(!isValidObjectId(id)) return null;

    return await this.User.findById(id);
  }

  async loginWithFacebook({
    id,
    displayName: name,
    emails: [ { value: email } ],
  }) {
    const query = { [FACEBOOK_ID_PATH]: id };
    const new_user = {
      name,
      email,
      linked_accounts: { facebook: { id } },
    };

    return await this.User.findOneOrCreate(query, new_user);
  }
}

module.exports = UserService;
