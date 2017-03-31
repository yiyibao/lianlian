var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
module.exports = {
	entry: './src/script/app.js',
	output: {
		path:__dirname + '/build',
		//filename:"app_[hash].js
		filename:"app.js"
	},
	devServer: {
	    contentBase: './build',
	    host: 'localhost',
	    port: 9999,
	    historyApiFallback: false,
	    //inline:true, //实时刷新
	    // proxy: {
	    //   '/api': {
		   //      target: 'http://localhost:3000',
		   //      pathRewrite: {'^/api': ''}
     // 		}
    	// }
    	//https://api.douban.com/v2/movie/top250'
    	 proxy: {
	      '/api': {
		        //target: 'http://www.baidu.com',
		        target: 'https://api.douban.com/v2/movie/in_theaters?count=3',
		        changeOrigin:true,
		        pathRewrite: {'^/api': ''}
     		},
     		'/ap': {
		        //target: 'http://www.baidu.com',
		        target: 'https://api.douban.com/v2/movie/in_theaters?count=3',
		        changeOrigin:true,
		        pathRewrite: {'^/ap': ''}
     		}
    	}
  	},
  	module:{
  		loaders:[
    		{
		        test: /\.css$/,
		        loader: ExtractTextPlugin.extract({
		          	fallback: 'style-loader',
		          	use: 'css-loader'
		        })
      		},
      		{
		        test: /\.scss$/,
		        loader: ExtractTextPlugin.extract({
		          	fallback: 'style-loader',
		          	use: 'css-loader!sass-loader'
		        })
      		},
      		{
		        test: /\.js$/,
		        exclude:/node_modules/,
		        loader: 'react-hot-loader!babel-loader'
      		}
  		]
  	},
  	plugins:[
	  	new HtmlWebpackPlugin({
	      	template: './src/index.ejs',
	      	filename: 'index.html',
	      	title: '豆瓣电影'
	    }),
	    new ExtractTextPlugin({ //css单独打包
	      	// filename: 'app_[hash].css',
	      	filename: 'app.css',
	      	disable: false,
	      	allChunks: true
    	}),
//    	new webpack.optimize.UglifyJsPlugin({
//       	compress: {
//         		warnings: false
//       	},
//       	output: {
//         		comments: false
//       	}
//     	})

  	],
	
	externals: {
	    'react': 'window.React',
	    'react-dom': 'window.ReactDOM',
	    'react-router': 'window.ReactRouter',
    	'jquery':"window.jQuery"
  	}
	
}










