//引入数据库
var mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true,useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error',()=>{
	console.log('connect is err')
	throw error;
})
db.once('open', function() {
  // we're connected!
  console.log('connect is success')
  //定义文档模型
  var userSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  major:String
	});
  //根据文档模型生成对应模型
  //第一个参数就是需要生成的集合的名称，mongoose会将其生成复数
  //第二个参数就是前面文档生成模型的名字
  var usermodel = mongoose.model('user', userSchema);
  //根据模型进行数据库的操作
  //3.1新增
  /*
  const user = new usermodel({name:"tom",age:18,major:"math"})
  user.save(function(err,docs){
  	if(err){
  		console.log('insert err',err.message)
  	}
  	else{
  		console.log('insert success',docs)
  	}
  })
  */
  //3.2查找
  usermodel.find({name:"tom"},(err.docs)=>{
  	if(err){
  		console.log('find err',err.message)
  	}
  	else{
  		console.log(docs)
  	}
  })
});