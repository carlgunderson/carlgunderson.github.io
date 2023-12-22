import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
	entry: { index: './src/index.js' },
	// target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		// publicPath: '/dist/',
		// filename: '[name].[contenthash].js',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env','@babel/preset-react'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './index.html' }),
	],
}