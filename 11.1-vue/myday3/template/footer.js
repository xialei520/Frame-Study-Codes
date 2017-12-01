new Vue({
	el:"#footer",
	data:{
		name:"footer"
	},
	template:"#footerTem",
	methods:{
		test(){
			console.log(this.name)
		}
	}
})