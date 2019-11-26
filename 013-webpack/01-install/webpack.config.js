const path = require('path');

module.exports = {
  //指定开发环境
	mode: "production", // "production" | "development" | "none"
  	entry: {
      index:'./src/index.js',
      about:'./src/about.js',
      contact:'./src/contact.js'
    },


	  output: {
	    filename: '[name]-[hash]-bundle.js',
	    path: path.resolve(__dirname, 'dist')
      
	  },
	  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   }
}