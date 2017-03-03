module.exports = function (config) {
  var testWebpackConfig = require('./webpack.test.js');

  var configuration = {

    basePath: '',

    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [],

    files: [{
      pattern: './config/spec-bundle.js',
      watched: false
    }],

    preprocessors: {
      './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: {
      noInfo: true
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },

    reporters: ['mocha', 'coverage', 'remap-coverage'],

    // web server port
    port: 9876,

    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    singleRun: true
  };

  config.set(configuration);
};
