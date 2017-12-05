import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
//window.$ = $
import "./resource/css/base.css"
Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import xheader from "./components/xheader.vue"
//var xheader = require("./components/xheader.vue")
let router = new VueRouter({
	routes:[{
		path:"/index",
		component:xheader
	}]
})
let store = new Vuex.Store({
	state:{
		title:"vue-webpack"
	}
})

new Vue({
	el: "#app",
	store,
	router,
	data: {
		name: "qd",
		//txt
		txt: require("./resource/txt/data.txt"),
		html: require("./resource/html/index.html"),
		img: require("./resource/images/1.jpg"),

	},
	template: `
		<router-view></router-view>
	`,
	components: {
		xheader
	}
})