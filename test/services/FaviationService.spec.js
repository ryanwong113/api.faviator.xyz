const { Faviation, Favicon } = require('../../lib/models');
const FaviationService = require('../../lib/services/FaviationService');
const mocks = require('../helpers/mocks');

module.exports = () => {
  describe('FaviationService', () => {
    const VALID_FAVICON_CONFIG = {
      "size": 160,
      "text": "F",
      "dx": 0,
      "dy": 0,
      "fontSize": 80,
      "fontFamily": "Dancing Script",
      "fontColor": "white",
      "backgroundColor": "rgb(219, 59, 211)",
      "borderWidth": 5,
      "borderColor": "#0D1423",
      "borderRadius": 5
    };

    let faviationService, faviator;

    beforeEach(() => {
      faviator = mocks.faviator();
      faviationService = new FaviationService({
        Faviation,
        Favicon,
        faviator,
      });
    });

    describe('constructor', () => {
      test('should save the dependencies into `this`', () => {
        expect(faviationService).toBeDefined();
        expect(faviationService.Faviation).toBe(Faviation);
        expect(faviationService.Favicon).toBe(Favicon);
        expect(faviationService.faviator).toBe(faviator);
      });
    });

    describe('create()', async () => {
      test('should return null when uid is not ObjectId', () => {
        expect(faviationService.create(
          'not object id',
          VALID_FAVICON_CONFIG
        )).resolves.toBeNull();
      });

      test('should create a faviation and favicon', () => {
        const buff = Buffer.from('hello');
        faviator.svg.mockResolvedValue(buff);

        expect(faviationService.create(
          mocks.ObjectId(),
          VALID_FAVICON_CONFIG
        )).resolves.toMatchObject({
          config: {
            ...VALID_FAVICON_CONFIG,
            size: undefined,
          }
        });
      });
    });

    describe('findAllByUser()', async () => {
      test('return [] when invalid id is given', () => {
      });

      test('calls Faviation.find on `creator_uid`', () => {
      });
    });

    describe('findById()', async () => {
      test('return null when invalid id is given', () => {
      });

      test('calls Faviation.findById with `id`', () => {
      });
    });
  });
};
