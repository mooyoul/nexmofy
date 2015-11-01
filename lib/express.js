/**
 * Module dependencies.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    registerRoutes = require('./routes');


/**
 * Create Express Application.
 */
var app = express();

/**
 * Register Middleware.
 */
app.use(bodyParser(), morgan());


/**
 * Register Routes
 */
registerRoutes(app);


/**
 * Expose Application.
 */
module.exports = exports = app;