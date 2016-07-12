var Weike = require('../models/weike.js');

module.exports.wordlist = function (req, res) {
	//	Weike.find({word:{$regex:'diction'}},function(err,data){

	//var query = Weike.aggregate([{$group:{'word':'$word'}}]);
	var arr=[];
	var query=Weike.find().select({'word':1});
	query.exec(function (err, data) {
		for(let i=0;i<data.length;i++){
			arr.push(data[i].word);
		}
		res.send(arr);
	});
}

module.exports.list = function (req, res) {

	var query=Weike.find();
	query.exec(function (err, data) {
		
		res.send(data);
	});
}