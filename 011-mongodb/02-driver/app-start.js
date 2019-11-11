
//引入数据库
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

const dbName = 'it'
//连接数据库
client.connect(err => {
	if(err){
		console.log('db connect is err')
		throw err
	}
	console.log('db connect is success')

	//切换到数据库，如果没有就新建数据库
	const db = client.db(dbName);
	//切换到集合，如果没有就创建集合
	const collection = db.collection('user')
	//console.log(collection)
	

	//3.1新增
	/*
	collection.insertMany([{name:"tom",age:18},{name:"bob",age:30}],(err,docs)=>{
		if(err){
			console.log('create is err',err)
		}
		else{
			console.log('user is success',docs)
		}
		client.close();
	})
	*/
	//3.2查找
	/*
	collection.find({name:"tom"}).toArray((err,docs)=>{
		if(err){
			console.log('user is err',err)
		}
		else{
			console.log('user is success',docs)
		}
		client.close()
	})
	*/
	//3.3更新
	/*
	collection.update({name:"tom"},{$set:{age:40}},(err,docs)=>{
		if(err){
			console.log('user is err',err)
		}
		else{
			console.log('user is success',docs)
		}
		client.close()
	})
	*/
	//3.4删除
	
	collection.deleteOne({name:"tom"},(err,docs)=>{
		if(err){
			console.log('user is err',err)
		}
		else{
			console.log('user is success',docs)
		}
		client.close()
	}) 	
});