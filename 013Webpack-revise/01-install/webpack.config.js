const path = require('path')

module.exports = {
	//指定开发环境
	mode: "production", // "production" | "development" | "none"

	//程序开始打包的地方
	entry: "./src/index.js", // string | object | array
	//程序输出
	 output: {
    // webpack 如何输出结果的相关选项
    //程序输出的文件夹为dist
    path: path.resolve(__dirname, "dist"), 
    //程序输出的文件名为bundle.js
    filename: "bundle.js"
	}
}