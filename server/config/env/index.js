'use strict';
var path = require('path');
var _ = require('lodash');

var common = {
    env: process.env.NODE_ENV,
    root: path.normalize(`${__dirname}/../../..`),
    browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    seedDB: false,
    secrets: {
        session: 'santy-secret'
    },
    // MongoDB connection options
    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    },
    google: {
        clientID: process.env.GOOGLE_ID || 'id',
        clientSecret: process.env.GOOGLE_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/google/callback`
    }
};


module.exports = _.merge(
    common,
    require('./shared'),
    require(`./${process.env.NODE_ENV}.js`) || {});