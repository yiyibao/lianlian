var webpack=require("webpack");
var htmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var openBoweserPlugin=require('open-browser-webpack-plugin');

module.exports={
	entry:'./src/script/app.js',
	output:{
		path:__dirname+'/build',
		filename:'app.js'
	},
	devServer:{
		contentBase:'./build',
		host:'localhost',
		port:5000,
		historyApiFallback:false,
		proxy:{
			'/api':{
				target:'http://localhost:9000',
				pathRewrite:{
					'^/api':''
				},
				changeOrigin:true
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
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:'css-loader!sass-loader'
				})
			},
	      	{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'react-hot-loader!babel-loader'
	      	}
		
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'./src/index.ejs',
			title:'联连Life'
		}),
		new ExtractTextPlugin({
			// filename:'app_[hash].css',
			filename:'app.css',
			disable:false,
			allChunks:true
		}),
//		new webpack.optimize.UglifyJsPlugin({
//			compress:{
//				warnings:false
//			},
//			output:{
//				comments:false
//			}
//		}),
		new openBoweserPlugin({url:'http://localhost:5000'})
	],
	externals:{
		'react':'window.React',
		'react-dom':'window.ReactDOM',
		'react-router':'window.ReactRouter',
		'redux':'window.Redux'
	}

}

