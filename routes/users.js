var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'User List' });
});
router.get('/detail', function(req, res, next) {
    res.send('user details');
});
router.get('/detail', function(req, res, next) {
    res.send('user details');
});

module.exports = router;