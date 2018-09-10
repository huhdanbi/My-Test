/**
 * Created by danbi on 2018. 5. 3..
 */
const path = require('path');
const dir_js = path.resolve(__dirname, 'js');
const dir_build = path.resolve(__dirname, 'build');

module.exports = {
	entry: path.resolve(dir_js, 'index.js'),
	output: {
		path: dir_build,
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			}]
		}
};
