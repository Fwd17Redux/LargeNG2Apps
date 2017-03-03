const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');
const buildPath = helpers.root('build', 'development');


module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  // devtool: 'source-map',

  output: {
    path: buildPath,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader'
        ],
        exclude: [
          /\.(spec|e2e-spec)\.ts$/
        ]
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new DefinePlugin({
      'ENV': JSON.stringify(ENV)
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

});
