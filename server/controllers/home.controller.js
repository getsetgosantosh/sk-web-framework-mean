var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');
// Article = mongoose.model('Article');

module.exports = function(app) {
    console.log('in home controller');
    app.use('/home', router);
};

router.get('/', function(req, res, next) {
    console.log('in home get');
    res.render('index', {
        title: 'Santy Framework MVC'
    });
});