var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

var api=require('../controllers/api.js');
var Weike=require('../models/weike.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/articles',function(req,res){
	
	
});

module.exports = router;
