const MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri, { useUnifiedTopology: true })

const dbName = 'it'

//1.连接数据库
client.connect(err => {
    if(err){
        console.log('connect db error::',err)
        throw err
    }
    console.log('connect db success...')
    //1.生成数据库，如果数据库中有就切换，如果没有就新建
    const db = client.db(dbName)
    //2.生成集合

    client.close()
})
