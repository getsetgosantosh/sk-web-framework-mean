'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var glob = require('glob');
var path = require('path');
var config = require('./env');
var mongoose = require('mongoose');
var browserSync = require('browser-sync').create();

module.exports = function(app) {
    var env = app.get('env');
    app.set('appPath', path.join(config.root, 'client'));
    app.set('appServerPath', path.join(config.root, 'server'));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
    app.set('views', config.root + '/server/views');
    app.set('view engine', 'jade');
    app.use(compression());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());

    var controllersPath = app.get('appServerPath') + '/controllers/*.js';
    console.log('controllersPath', controllersPath);
    var controllers = glob.sync(controllersPath);
    controllers.forEach(function(controller) {
        console.log('controller=', controller);
        require(controller)(app);
    });

    if ('dev' === env) {
        app.use(errorHandler()); // Error handler - has to be last
    }
}