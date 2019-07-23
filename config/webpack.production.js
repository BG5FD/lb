const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
      },
    }),
  ],
});
