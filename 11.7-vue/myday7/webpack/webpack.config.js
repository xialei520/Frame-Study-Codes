//1.配置webpack
//1.全局安装webpack   cmpn install webpack -g
//2.局部安装webpack
var webpack = require("webpack");
var path = require("path");
module.exports = {
	//入口导入文件
	entry:"./index.js",
	//出口文件
	output:{
		path:path.resolve(__dirname, "public"),
		filename:"bundle.js"
	},
	//引入loader
	module:{
		rules:[{
			test:/\.txt$/,
			use:"raw-loader"
		}, {
			test:/\.html$/,
			use:"html-loader"
		}, {
			test:/\.vue$/,
			use:""
		}]
	},
	//在引用vue模块时,实际引进的是vue.runtime.common.js,而非vue.js,因此强制设置引用vue为vue.js。
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
}
