
const fs = require('fs')

const path = require('path')

const util = require('util')

//以绝对路径读取文件数据的位置
const filepath = path.normalize(__dirname + '/../data/item.json')
const readfile = util.promisify(fs.readFile)


async function get(){
	//1.读取文件数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'})
	const Data = JSON.parse(data)
	// console.log(Data)
	//2.返回文件数据
	return Data
}

module.exports = {
	get
}