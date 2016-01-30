var fs      = require('fs');
var path    = require('path');
var webpack = require('webpack');

var nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './app/client.js',

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/dist'
  },

  module: {
    loaders: [
      { 
        test:     /\.js$/,
        exclude:  /node_modules/,
        loader:   'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(nodeEnv) })
  ]
};

