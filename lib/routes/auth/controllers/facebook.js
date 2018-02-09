const controllers = {};

controllers.login = (req, res) => res.end('hello fb');
controllers.callback = (req, res) => res.end('hello fb cb');

module.exports = controllers;
