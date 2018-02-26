const { createDummy } = require('./helpers/User');

const { User } = require('../../lib/models');
const { FACEBOOK_ID_PATH } = require('../../lib/models/User');

module.exports = () => {
  describe('.create()', () => {
    test('should creates user', async () => {
      const dummy = createDummy();

      const user = await User.create({
        ...dummy,
        loool: 300,
        irrel: 'efkj',
      });

      expect(user).toMatchObject(dummy);
      expect(user.loool).toBeUndefined();
      expect(user.irrel).toBeUndefined();
    });

    test('should throws if with same email', () => {
      const dummy = createDummy();
      return expect(User.create([
        dummy,
        createDummy({ email: dummy.email }),
      ])).rejects.toThrow();
    });

    test('should throws if with same facebook id', () => {
      const dummy = createDummy();
      return expect(User.create([
        dummy,
        createDummy({
          linked_accounts: {
            facebook: {
              id: dummy.linked_accounts.facebook.id,
            },
          },
        }),
      ])).rejects.toThrow();
    });
  });

  describe('.findOneOrCreate()', () => {
    const existingUser = createDummy();

    beforeEach(async () => {
      await User.create([
        existingUser,
        createDummy(),
      ]);
    });

    test('it should be defined', () => {
      expect(User.findOneOrCreate).toBeDefined();
    });

    test('it can find the existing user, without creating', async () => {
      const user = await User.findOneOrCreate({
        [FACEBOOK_ID_PATH]: existingUser.linked_accounts.facebook.id,
      }, existingUser);
      expect(user).toBeDefined();
      expect(user).toMatchObject(existingUser);
      expect(await User.count({})).toBe(2);
    });

    test('it will create a new user when not found and return it', async () => {
      const newUser = createDummy();

      const user = await User.findOneOrCreate({
        [FACEBOOK_ID_PATH]: newUser.linked_accounts.facebook.id,
      }, newUser);
      expect(user).toBeDefined();
      expect(user).toMatchObject(newUser);
      expect(await User.count({})).toBe(3);
    });

  });
};
