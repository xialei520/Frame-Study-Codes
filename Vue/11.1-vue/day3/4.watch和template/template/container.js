new Vue({
	el: "#container",
	data: {
		name: "内容"
	},
	template: `
					<div style="border:1px solid green">
						<p v-text="name"></p>
						<button>OK</button>
					</div>
				`
})