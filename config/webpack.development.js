const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
  ],
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
		hot: true,
		inline: true,
  },
};
