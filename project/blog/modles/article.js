const mongoose = require('mongoose')
const moment = require('moment')


//1.定义文档模型
	const ArticleSchema = new mongoose.Schema({
	  	title:{
	  		type:String,
	  	},
	  	intro:{
	  		type:String
	  	},
	  	author:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'user'
	  	},
	  	category:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'category'
	  	},
	  	createAt:{
	  		type:Date,
	  		default:Date.now
	  	},
	  	click:{
	  		type:Number,
	  		default:0
	  	}
	  	
	})
	ArticleSchema.virtual('createTime').get(function(){
		//return this.createAt.tolocleString()
		return moment(this.createAt).format('YYYY-MM-DD HH:mm:ss')
	})


//2.根据文档模型生成对应模型(集合)
//2.1第一个参数就是需要生成的集合名称,mongoose子自动将集合名称转化为复数
//2.2第二个参数就是前面定义的文档模型
const ArticleModel = mongoose.model('article', ArticleSchema)


module.exports = ArticleModel