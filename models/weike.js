var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var weikeSchema=new Schema(
{
	word:String,
	pron:String
//	definition:[String]
	
});

module.exports=mongoose.model('Weike',weikeSchema);