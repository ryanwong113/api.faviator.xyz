const mockMethods = (methodNames) => Object.assign(...methodNames.map(name => ({ [name]: jest.fn() })));

exports.document = () => mockMethods([
  'toObject',
  'toJSON',
]);

exports.model = () => mockMethods([
  'find',
  'findById',
  'findOne',
  'create',
  'update',
]);

exports.faviator = () => {
  const f = jest.fn();
  f.svg = f;
  f.jpg = f.jpeg = jest.fn();
  f.png = jest.fn();
  return f;
};

exports.ObjectId = () => require('mongoose').Types.ObjectId();
