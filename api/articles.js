
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const {
	wrap : async
}
	 = require('co');

exports.index = function (req, res) {
	//exports.index = async(function* (req, res) {

	const page = (req.query.page > 0 ? req.query.page : 1) - 1;
	const limit = 3;
	const options = {
		limit : limit,
		page : page
	};

	const count = 60;

	const articles = Article.list(options, function (err, data) {
			res.json({
				title : 'Articles',
				articles : data,
				page : page + 1,
				pages : Math.ceil(count / limit)
			});
		});

	/*
	Article.find({}).limit(limit).skip(limit*page).exec(function(err,data){
	if(err){
	console.log(err);
	}

	res.json({
	title:'Articles',
	articles:data,
	page:page+1,
	pages:Math.ceil(count/limit)
	});
	});
	 */
	/*
	res.json({
	title:'Articles',
	articles:articles,
	page:page+1,
	pages:Math.ceil(count/limit)
	});
	 */

};
