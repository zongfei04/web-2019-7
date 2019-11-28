const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  //指定开发环境
	mode: "production", // "production" | "development" | "none"
  //入口处
  	entry: {
      index:'./src/index.js',
      
    },
    //出口

	  output: {
	    filename: '[name]-[hash]-bundle.js',
	    path: path.resolve(__dirname, 'dist')
      
	  },
	  module: {
     rules: [
     //加载css
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       //加载图片
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
          test:/\.js$/,
          exclude: /(node_modules)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env', 'react']
              }
          }               
      }
     ]
   },
   plugins:[
     //自动生成html
      //清理多余文件
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template:'./src/index.html',//模板文件
          filename:'index.html',//输出的文件名
          //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
          hash:true//给生成的js/css文件添加一个唯一的hash
      })
     
    ],
    devServer:{
      contentBase: './dist',//内容的目录
      port:8080//服务运行的端口
    },

}