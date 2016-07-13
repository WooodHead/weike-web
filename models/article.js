

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ArticleSchema=new Schema(
{
	title:String,
	body:String
}
);

ArticleSchema.statics={
	list: function(options,callback){
		var criteria=options.criteria||{};
		var page=options.page||0;
		var limit=options.limit||0;
	this.find(criteria).limit(limit).skip(limit*page).exec(callback);
	
		
	}
	
};

mongoose.model('Article', ArticleSchema);