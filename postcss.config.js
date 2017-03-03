const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const pixrem = require('pixrem');


let plugins = [
  stylelint({ configFile: '.stylelintrc.json' }),
  autoprefixer({ browsers: 'last 2 versions, ie > 10, safari >= 9' }),
  pixrem()
];

module.exports = {
  parser: 'postcss-scss',
  sourceMap: 'inline',
  plugins: plugins
}
