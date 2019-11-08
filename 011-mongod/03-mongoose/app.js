
//连接数据
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true,useUnifiedTopology: true});
 

//验证数据库
var db = mongoose.connection;
db.on('error',(err,docs)=>{
	console.log('connect is error')

})
db.once('open', function() {
	//定义数据模型
  var userSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});

});
