# 绑定事件
v-on:xxx来绑定事件,相当于@
```html
<button v-on:click="login()">登录</button>
//等价于
<button @click="login">登录</button>
```
而事件在methods里面声明,注意this的指向
```js
...
methods: {
	login: function() {
		var self = this;
		console.log(this.username, this.password)
		$.ajax({
			url: "http://localhost/qd1704/day2/",
			type: "GET",
			data: {
				username: self.username,
				password: self.password
			},
			success: function(data) {
				console.log(this)
				self.content = data
			}
		})
	},
	logout: function() {
		this.login();
		console.log("注销")
	}
}
...
```

# 过滤器

过滤器就是处理相同数据的一个封装方法,vue.filter定义，在表达式{{}}中配合管道字符|使用
```js
<p>{{num|gqs}}</p>
Vue.filter("gqs", function(value) {
	console.log(value)
	var newValue = "$" + value
	return newValue
})
```
注意全局和局部过滤器,局部过滤器directives是复数
```js
//全局过滤器
Vue.filter("xxx", function(value) {})
new Vue({
	//局部过滤器
	directives:{}
})
```

# 计算属性

computed计算属性，一般可以取代过滤器的作用,注意过滤器定义的变量不可以在data中重复定义
```js
new Vue({
	el: "#demo",
	data: {
		search: "abc",
		num: 1000,
	},
	computed: {
		searched: function() {
			return "cba"
		},
		numed: function() {
			return '$' + this.num
		}
	}
})
```