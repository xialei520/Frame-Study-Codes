Vue.component("xheader", {
	template:`
		 <div class="row-fluid">
			<div class="span12">
				<ul class="nav nav-tabs">
					<li class="active">
						<a href="#">首页</a>
					</li>
					<li>
						<a href="#">资料</a>
					</li>
					<li class="disabled">
						<a href="#">信息</a>
					</li>
					<li class="dropdown" :class="{'open':bool}">
						 <a @click = "showDropdown" href="#" data-toggle="dropdown" class="dropdown-toggle">下拉<strong class="caret"></strong></a>
						<ul class="dropdown-menu">
							<li>
								<a href="#">操作</a>
							</li>
							<li>
								<a href="#">设置栏目</a>
							</li>
							<li>
								<a href="#">更多设置</a>
							</li>
							<li class="divider">
							</li>
							<li>
								<a href="#">分割线</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	`,
	data:function(){
		return{
			bool:false
		}
	},
	methods:{
		showDropdown:function(){
			this.bool = !this.bool;
		}
	}
})