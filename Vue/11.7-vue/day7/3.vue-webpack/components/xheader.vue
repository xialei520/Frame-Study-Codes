<template lang="jade">
	div
		header {{name}}
		child
		
</template>
<script>
	import $ from "jquery";
	import child from "./child.vue"
	export default {
		data(){
			return {
				name:"头部组件",
				title:"测试"
			}
		},
		mounted(){
			console.log($)
			/*var str:string = "abc";
			var num:number = 1
			console.log(str,num)*/
		},
		components:{
			child
		}
	}
</script>
<style lang="scss" scoped>
	$size:66px;
	header{
		width: 100%;
		height: $size;
		line-height: $size;
		color: white;
		text-align: center;
		background-color: red;
	}
	.title{
		font-size: 50px;
	}
</style>