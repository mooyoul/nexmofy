/**
 * Module dependencies.
 */
var http = require('http'),
    app = require('./lib/express'),
    routes = require('./lib/routes'),
    channel = require('./lib/channel');

var Slackify = module.exports = exports = {};

Slackify.listen = function (port) {
    http.Server(app).listen(port, function () {
        console.log('Nexmofy server started on port %d...', port);
    });
};

Slackify.channel = channel;
Slackify.registerRoutes = routes;