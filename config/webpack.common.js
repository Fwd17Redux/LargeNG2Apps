const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ForkCheckerPlugin } = require('awesome-typescript-loader');
const DashboardPlugin = require('webpack-dashboard/plugin');

const helpers = require('./helpers');

let plugins = []

if (helpers.isWebpackDevServer()) {
  plugins.push(new DashboardPlugin());
}

let cssLoaderSetting = 'css-loader';
if (process.env.ENV === 'production') {
  cssLoaderSetting += '?minimize';
}

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts',
    'styles': './src/styles.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    unsafeCache: true,
    modules: [
      helpers.root('src'),
      'node_modules'
    ],
  },

  module: {

    loaders: [

      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },

      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          cssLoaderSetting,
          'sass-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          cssLoaderSetting,
          'less-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    ...plugins,
    new ForkCheckerPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    // make weird WARNING after upgrading from RC7 to final release go away
    // https://github.com/AngularClass/angular2-webpack-starter/issues/993
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ]

};
