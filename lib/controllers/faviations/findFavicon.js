const { FAVICON_NOT_FOUND } = require('../../errors');
const { faviationService } = require('../../services');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async ({ params: { faviation_id, favicon_id } }, res, next) => {
  const favicon = await faviationService.findFavicon(faviation_id, favicon_id);

  if (!favicon) next(FAVICON_NOT_FOUND);

  const contentType = 'image/' + (favicon.format === 'svg'? 'svg+xml': favicon.format);
  res.header({
    'Content-Type': contentType,
    'Vary': 'Accept-Encoding',
  });
  res.send(favicon.data.buffer);
});
