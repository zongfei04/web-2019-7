

const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//css打包工具
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//模板文件函数
const pluginsHtmlConfig = (name,title)=>({
    template:'./src/views/'+name+'.html',//模板文件
    title:title,
    filename: name+'.html',//输出的文件名
    //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:[name,'common']//生成模板文件
})

module.exports = {
    //指定环境
    mode:'development',
    // mode:'production',
    //单一入口
    // entry: './src/index.js',
    // entry: {main:'./src/index.js'},
    //多入口
    entry:{
        index:'./src/pages/index/index.js',
        list:'./src/pages/list/index.js',
        common:'./src/pages/common/index.js',
        'user-login':'./src/pages/user-login/index.js'
    },
    //出口
    output: {
        //「入口分块(entry chunk)」的文件名模板
        // filename: '[name]-[chunkhash]-bundle.js',
        filename: 'js/[name]-[hash]-bundle.js',
        //指定输出参考根路径
        publicPath:'/',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    },
    //配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            util:path.resolve(__dirname,'./src/util'),
            commont:path.resolve(__dirname,'./src/commont'),
            api:path.resolve(__dirname,'./src/api'),
            node_modules:path.resolve(__dirname,'./node_modules'),

        }
    },
    module: {
        rules: [
        //处理css文件
            {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },
        //处理图片
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)\??.*$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 400,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            },
        //bable
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env', 'react'],
                        presets: ['env','es2015','stage-3'],
                    },
                }
            },
        ]
    },
    plugins:[
         new MiniCssExtractPlugin({
            filename:'css/[name]-[hash]-bundle.css'
        }),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin(pluginsHtmlConfig('index','首页')),
        new htmlWebpackPlugin(pluginsHtmlConfig('list','列表')),
        new htmlWebpackPlugin(pluginsHtmlConfig('user-login','登录')),

    ],
    devServer: {
        contentBase: './dist',//内容的目录
        port:3003,//指定服务端口
        historyApiFallback:true,//让h5路由不向后端发送请求,
        proxy: [{
          context: ['/sessions'],
          target: 'http:127.0.0.1:3000',
        }]
    },                
}