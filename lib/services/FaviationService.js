const { User } = require('../models');
const { isValidObjectId } = require('../models/helpers');

const DEFAULT_SIZE = 160;

class FaviationService {
  constructor({ Faviation, Favicon, faviator }) {
    Object.assign(this, { Faviation, Favicon, faviator });
  }

  async create(uid, config) {
    if (!isValidObjectId(uid)) return null;

    config = { ...config, size: undefined };

    const faviation = await this.Faviation.create({
      config,
      creator_uid: uid,
    });

    const favicon = await this.Favicon.create({
      faviation_id: faviation._id,
      size: DEFAULT_SIZE,
      format: 'svg',
      data: await this.faviator.svg({
        ...config,
        DEFAULT_SIZE,
      }),
    });

    faviation.favicons.push(favicon._id);

    await faviation.save();

    return faviation.toObject();
  }

  async findAllByUser(uid) {
    if(!isValidObjectId(uid)) return [];

    const faviations = await this.Faviation.find({ creator_uid: uid });
    return faviations.map(f => f.toObject());
  }

  async findById(id) {
    if (!isValidObjectId(id)) return null;

    const faviation = await this.Faviation.findById(id);
    if (!faviation) return null;

    return faviation.toObject();
  }

  async findFavicon(faviation_id, favicon_id) {
    if (!isValidObjectId(faviation_id) || !isValidObjectId(favicon_id)) return null;

    const faviation = await this.findById(faviation_id);

    if (!faviation) return null;

    const favicon = await this.Favicon.findById(favicon_id);

    return favicon.toObject();
  }

  async faviate(faviation_id, format, size) {
    const faviation = await this.Faviation.findById(faviation_id);
    if (!faviation) return null;

    const buffer = await this.faviator[format]({ ...faviation.config, size });

    const favicon = await this.Favicon.create({
      faviation_id,
      format,
      size,
      data: buffer,
    });

    faviation.favicons.push(favicon._id);
    await faviation.save();

    return favicon.toObject();
  }
}

module.exports = FaviationService;
