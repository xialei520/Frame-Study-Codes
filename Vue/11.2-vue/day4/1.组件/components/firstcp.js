Vue.component("firstCp", {
	template: `
					<div style="border:1px solid red">
						<input v-model="name" />
						<p>{{name}}</p>
						<button @click="test">ok</button>
					</div>
				`,
	data: function() {
		return {
			name: "这是第一个组件"
		}
	},
	methods: {
		test: function() {
			console.log(this.name)
		}
	},
	mounted: function() {
		console.log(1)
	},
	directives: {},
	filters: {}
})