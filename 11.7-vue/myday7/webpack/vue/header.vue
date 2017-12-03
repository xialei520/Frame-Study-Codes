<template>
	<div>
		<header>{{name}}</header>
	</div>
	
</template>

<script>
//	module.exports={}
//ES6写法
	export default {
		data(){
			return{
				name:"头部组件"
			}
			
		}
	}
</script>

<style scoped>
	/*scoped 将样式锁在本地，这样就不会影响外面的样式*/
	header{
		
	}
</style>