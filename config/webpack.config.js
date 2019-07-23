const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const productionConfig = require('./webpack.production');
const developmentConfig = require('./webpack.development');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LB_SERVER = 'http://127.0.0.1:9999';

const commonConfig = {
  entry: [
		'babel-polyfill',
		path.resolve(__dirname, '../src/index.js'),
  ],
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'bundle.js',
	},
  plugins: [
		new HtmlWebpackPlugin({
      filename: 'index.html',
			template: path.resolve(__dirname, '../src/public/index.html'),
			favicon: path.resolve(__dirname, '../src/public/favicon.ico'),
      inject: true,
      hash: true,
		}),
		new webpack.optimize.SplitChunksPlugin(),
	],
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
			app: path.resolve(__dirname, '../src'),
			routes: path.resolve(__dirname, '../src/routes'),
			utils: path.resolve(__dirname, '../src/utils'),
    },
    extensions: ['.js', '.jsx', '.css', '.less'],
  },
	module: {
		rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(process.cwd(), 'src'),
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
				test: /\.(css|less)$/,
				use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
    ],
	},
	devServer: {
		host: '0.0.0.0',
		proxy: {
      '/lb': {
        target: `${LB_SERVER}`,
        changeOrigin: true,
        pathRewrite: { '^/lb': '' },
      },
		},
	},
};

module.exports = () => {
  let config = null;
  switch (process.env.NODE_ENV) {
    case 'production':
      config = productionConfig;
      break;
    default:
      config = developmentConfig;
  }

  // config = merge(commonConfig, config);
  // // eslint-disable-next-line no-console
  // console.log('config:', config);
  // return config;
  return merge(commonConfig, config);
};
