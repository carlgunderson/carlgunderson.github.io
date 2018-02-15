import path from 'path'

export default {
	entry: './src/index.js',
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
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ['style']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, './'),
		port: 9000
	}
}