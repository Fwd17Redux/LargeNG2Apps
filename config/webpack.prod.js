const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CompressionPlugin = require('compression-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const buildPath = helpers.root('build', 'production');


module.exports = webpackMerge(commonConfig, {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.aot.ts',
    'styles': './src/styles.ts'
  },

  devtool: 'source-map',

  output: {
    path: buildPath,
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].map',
    chunkFilename: '[id].[chunkhash].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
        ],
        exclude: [
          /\.(spec|e2e-spec)\.ts$/
        ]
      }
    ]
  },

  plugins: [
    new WebpackMd5Hash(),
    new OfflinePlugin({
      updateStrategy: 'changed',
      ServiceWorker: {
        events: true
      },
      AppCache: false
    }),

    new UglifyJsPlugin({
      beautify: false,
      mangle: true,
      compress: {
         warnings: false,
      },
      comments: false,
      screw_ie8: true
    }),

    new CompressionPlugin({
      regExp: /\.css$|\.html$|\.js$|\.map$/,
      threshold: 2 * 1024
    }),

    new DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),

    new webpack.LoaderOptionsPlugin({
      debug: false
    }),

    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true
    })
  ]

});
