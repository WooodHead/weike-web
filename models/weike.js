var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var mongoosePaginate=require('mongoose-paginate');

var weikeSchema=new Schema(
{
	word:String,
	pron:String
//	definition:[String]
	
});

weikeSchema.plugin(mongoosePaginate);

module.exports=mongoose.model('test',weikeSchema);