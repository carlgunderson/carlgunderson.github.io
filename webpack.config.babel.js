import webpack from 'webpack'
import path from 'path'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						
					}
				}
			},
			{
				test: /\.scss$/,
				use: ['style']
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({ uglifyOptions: { compress: true }})
	],
	devServer: {
		contentBase: path.join(__dirname, './'),
		port: 9000
	}
}