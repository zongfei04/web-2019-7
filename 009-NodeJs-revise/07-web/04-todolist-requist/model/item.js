
const fs = require('fs')

const path = require('path')

const util = require('util')

//以绝对路径读取文件数据的位置
const filepath = path.normalize(__dirname + '/../data/item.json')
//读取文件数据
const readfile = util.promisify(fs.readFile)
//添加文件数据
const writefile = util.promisify(fs.writeFile)


async function get(){
	//1.读取文件数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'})
	const Data = JSON.parse(data)
	// console.log(Data)
	//2.返回文件数据
	return Data
}

//添加数据
async function add(task){
	//读取文件来获取数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'})
	//将字符串转化成数组
	const arr = JSON.parse(data)
	//生成任务对象将其添加到数组中
	var obj = {
		id:Date.now().toString(),
		task:task
	}
	arr.push(obj)
	//将更新的数组转化为字符串，覆盖写入到文件中
	await writefile(filepath,JSON.stringify(arr))
	//返回任务对象
	return obj
}
// add(task)
module.exports = {
	get,
	add
}