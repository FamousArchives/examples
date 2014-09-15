var path = require('path');

exports.register = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public/')
      }
    }
  });
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
