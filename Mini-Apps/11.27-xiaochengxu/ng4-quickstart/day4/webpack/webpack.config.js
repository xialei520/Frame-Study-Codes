//webpack配置文件
var webpack = require("webpack");
var path = require("path")
module.exports = {
	//入口 导入文件
	entry: './index.ts',
	//出口 导出文件
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	//loader就是为了处理非JS类型的文件
	module: {
		rules: [{
			test: /\.ts$/,
			use: 'ts-loader'
		}]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
};
