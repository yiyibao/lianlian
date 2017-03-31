﻿var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBeowserPlugin = require('open-browser-webpack-plugin')
  //var webpack = require('webpack')
module.exports = {
  entry: './src/script/app.js',
  output: {
    path: __dirname + '/build',
    //filename: 'app_[hash].js'
    filename: 'app.js'
  },

  // devServer: {
  //   contentBase: './build',
  //   host: 'localhost',
  //   port: 9000,
  //   historyApiFallback: false,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }

  //   }
  // },
  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 9000,
    historyApiFallback: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: '豆瓣电影'
    }),
    new ExtractTextPlugin({
      //filename: 'app_[hash].css',
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),
    new OpenBeowserPlugin({
      url: 'http://localhost:9000'

    })
  ],

  module: {
    loaders: [
      //       {
      //         test: /\.css$/,
      //         loader: 'style-loader!css-loader'
      //       },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },

      //       {
      //         test: /\.scss$/,
      //         loader: 'style-loader!css-loader!sass-loader'
      //       }
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      }

    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'redux': 'window.Redux',
    'react-redux': 'window.ReactRedux'

  }
}