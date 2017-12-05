import $ from "jquery";
import tool from "./js/tool.js";
window.$ = $;
console.log("aaaa");
console.log(tool);
import data from "./txt/data.txt";
console.log(data);
import  Vue from "vue";
//var xheader = require("./vue/header.vue");
此处ES5不支持,只能用ES6的方法
//import xheader from "./vue/header.vue";
new Vue({
	el:"#box",
	data:{
		txt:require("./txt/data.txt"),
		html:require("./html/index.html")
	},
	template:require("./index.html"),
	template:`
		<div>
			<p>{{txt}}</p>
			<div v-html="html"></div>
		</div>
	`,
	component:{
		xheader:xheader
	}
})
