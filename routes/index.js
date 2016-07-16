var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

var api=require('../api/api.js');
var Weike=require('../models/weike.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
