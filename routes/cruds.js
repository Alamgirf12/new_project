var express = require('express');
var router = express.Router();
var db = require('../db');
// get page 
router.get('/', function(req, res, next) {
    var q = "select * from products";
    db.query(q, function(err, rows, fields) {
        if (err) throw err;
        res.render('view', { title: 'crud', p: rows });
    })
});
//insert data to database
router.get('/i', function(req, res, next) {
    res.render('add', { title: 'add products' });
});
router.post('/add', function(req, res, next) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var mobile = req.body.mobile;

    var q = `insert into products (product_name,sku,price,created_at) values("${fname}","${lname}","${mobile}", NOW())`;
    db.query(q, function(err, result) {
        if (err) throw err;
        res.redirect('/cruds');
    });
});
//edit
router.get('/edit/:id', function(req, res, next) {
    var id = req.params.id;
    var q = `select * from products where id = ${id}`;
    db.query(q, function(err, rows, fields) {
        res.render('edits', { title: 'update', p: rows[0] });

    });
});

router.post('/update/:id', function(req, res, next) {
    var id = req.params.id;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var mobile = req.body.mobile;
    var q = `update products set product_name="${fname}", sku="${lname}",price="${mobile}" where id = ${id}`;
    db.query(q, function(err, result) {
        if (err) throw err;
        res.redirect('/cruds');
    })
});
router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    var q = `delete from products where id = ${id}`;
    db.query(q, function(err, result) {
        if (err) throw err;
        res.redirect('/cruds');
    });
});
module.exports = router;