const webpack = require('webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';


module.exports = {

  devtool: 'cheap-module-inline-source-map',

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      helpers.root('src'),
      'node_modules'
    ],
  },

  module: {

    loaders: [
            {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader?inlineSourceMap=true&sourceMap=false&module=commonjs',
          'angular2-template-loader'
        ],
        enforce: 'pre',
        exclude: [
          /\.e2e-spec\.ts$/
        ]
      },

      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // add packages with broken source maps here
        ]
      },

      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [helpers.root('src/index.html')]
      },

      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader'],
        exclude: [helpers.root('src/index.html')]
      },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          // 'sass',
          { loader: 'sass-loader' },
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss',
              plugins: function () {
                return [
                  stylelint({ configFile: '.stylelintrc.json' }),
                  autoprefixer({ browsers: 'last 2 versions, ie > 10, safari >= 9' }),
                  pixrem
                ]
              }
            }
          }
        ]
      },

      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },

      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        enforce: 'post',
        exclude: [
          /\.(e2e-spec|spec)\.ts$/,
          'node_modules',
          'build'
        ],
      }

    ]

  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
      }
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ]

};
