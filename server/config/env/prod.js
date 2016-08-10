'use strict';
// Production specific configuration
// =================================
module.exports = {
    port: process.env.port || 8080,
    mongo: {
        uri: 'mongodb://localhost:27017/santy-framwork-prod'
    }
};