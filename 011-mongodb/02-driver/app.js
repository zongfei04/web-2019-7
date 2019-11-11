
//引入数据库
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

//连接数据库
client.connect(err => {
	if(err){
		console.log('db connect is err')
		throw err
	}
	console.log('db connect is success')
  client.close();
});