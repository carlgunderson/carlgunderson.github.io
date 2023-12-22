import path from 'path'
import merge from 'webpack-merge'
import common from './webpack.common.babel.js'

export default merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, './'),
		port: 9000,
	}
})