Vue.component('firstCp', {
	template:`
		<div style = "border:1px solid green">
			<p>{{name}}</p>
			<input v-model = "name">
			<button @click = "test">ok</button>
		</div>
	`,
	data:function(){
		return {
			name:"这是第一个组件"
		}
	},
	methods:{
		test:function(){
			console.log(this.name);
		}
	},
	mounted:function(){
		console.log(1);
	}
})
