'use strict';

module.exports = {
  entry: './src/index.js',
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  output: {
    path: __dirname + '/www/js',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map'
};
