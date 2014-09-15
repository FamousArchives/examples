'use strict';
var Hapi = require('hapi');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 1337);

server.pack.register(require('./plugin'), function (err) {
  if (err) { console.error('Failes to load a plugin:', err); }
});

server.start();
