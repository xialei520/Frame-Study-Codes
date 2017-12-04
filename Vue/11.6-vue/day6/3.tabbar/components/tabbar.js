//weui-bar__item_on
var tabbar = {
	template: `
		<div class="weui-tabbar">
			<a @click="toggleId(a.id)" v-for="a in arr" :href="a.href" class="weui-tabbar__item" :class="{'weui-bar__item_on':a.id==id}">
				<span style="display: inline-block;position: relative;">
                        <img src="./images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
				</span>
				<p class="weui-tabbar__label">{{a.title}}</p>
			</a>
		</div>
	`,
	data:function(){
		return {
			id:1,
			arr:[{
				id:1,
				title:"微信",
				href:"#/tab1"
			},{
				id:2,
				title:"通讯录",
				href:"#/tab2"
			},{
				id:3,
				title:"发现",
				href:"#/tab3"
			},{
				id:4,
				title:"我",
				href:""
			}]
		}
	},
	methods:{
		toggleId:function(id){
			this.id = id
		}
	}
}