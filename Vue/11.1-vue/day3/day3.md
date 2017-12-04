# directive

指令,对DOM操作的封装
```js
Vue.directive("color", function(el, binding) {
	console.log(el);
	el.style.color = binding.value
	console.log(binding)
})
```

# watch

监听数据模型,如果name值改变,name执行watch的回调函数
```js
new Vue({
	el: "#demo",
	data: {
		name: "qd"
	},
	//监听数据模型
	watch: {
		name: function(value, oldValue) {
			console.log(value)
			console.log(oldValue)
		}
	}
})
```