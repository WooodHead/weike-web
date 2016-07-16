var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

var api=require('../api/api.js');
var Weike=require('../models/weike.js');

var url=require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/words/:pageSize/:pageIndex', function(req, res) {

        var query = {};

        Weike.paginate(query, { page: parseInt(req.params.pageIndex), limit: parseInt(req.params.pageSize) }, function(err, result) {
            if (err) {
                res.send(err);
            } else {
              console.log(JSON.stringify(result));
                res.json(result);
            }
        });
    });
    
    
module.exports = router;
