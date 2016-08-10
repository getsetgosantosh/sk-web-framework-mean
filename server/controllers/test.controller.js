var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');
// Article = mongoose.model('Article');

module.exports = function(app) {
    console.log('in test controller');
    app.use('/test', router);
};

router.get('/', function(req, res, next) {
    console.log('in test get');
    res.render('test', {
        title: 'Santy Framework MVC'
    });
});