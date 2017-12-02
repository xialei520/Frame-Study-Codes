var recommond = {
	template:"<div>推荐123123</div>"
}
var video = {
	template:"<div>视频33333</div>"
}
var hot = {
	template:"<div>热点12321</div>"
}
var social = {
	template:"<div>社会6666</div>"
}

var router = new VueRouter({
	routes:[{
		path:"/recommond",
		component:recommond
	},{
		path:"/video",
		component:video
	},{
		path:"/hot",
		component:hot
	},{
		path:"/social",
		component:social
	}]
})
new Vue({
	el:"#demo",
	template:`
	<div>
		<div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="90216f68fcee4445c2bcd74089c38f9f"></div>
		<div id="main">
			<div data-reactroot="" id="indexContainer" class="indexContainer withHeader ">
				<header id="indexHeader" class="index--toutiaoribao">
					<div class="top_bar">
						<div class="abs_m">
							<a href="https://m.toutiao.com/?w2atif=1&amp;channel=__all__#" class="refresh_title btn"></a>
							<div class="refreshBtn-container "><i class="refresh_btn"></i></div>
						</div>
						<div class="abs_l">
							<a href="javascript:;" class="msg-box">
								<div class="circle"></div>
							</a>
						</div>
						<div class="abs_r">
							<a href="https://m.toutiao.com/search/?need_open_window=1" class="btn search"></a>
						</div>
					</div>
				</header>
				<div>
					<div class="top_menu_bar ">
						<div class="top_menu_more">
							<div class="list_shadow"></div>
							<a class="more_btn" href="javascript:void(0)"><span class="cross"></span></a>
						</div>
						<div class="top_menu_list">
							<a href="#/recommond" data-channel="__all__" data-query="channel=__all__" class="btn cur">推荐</a>
							<a href="#/video" data-channel="video" data-query="channel=video" class="btn">视频</a>
							<a href="#/hot" data-channel="news_hot" data-query="channel=news_hot" class="btn">热点</a>
							<a href="#/social" data-channel="news_society" data-query="channel=news_society" class="btn">社会</a>
							<a href="javascript:void(0)" data-channel="news_entertainment" data-query="channel=news_entertainment" class="btn">娱乐</a>
							<a href="javascript:void(0)" data-channel="news_military" data-query="channel=news_military" class="btn">军事</a>
							<a href="javascript:void(0)" data-channel="news_tech" data-query="channel=news_tech" class="btn">科技</a>
							<a href="javascript:void(0)" data-channel="news_car" data-query="channel=news_car" class="btn">汽车</a>
							<a href="javascript:void(0)" data-channel="news_sports" data-query="channel=news_sports" class="btn">体育</a>
							<a href="javascript:void(0)" data-channel="news_finance" data-query="channel=news_finance" class="btn">财经</a>
							<a href="javascript:void(0)" data-channel="news_world" data-query="channel=news_world" class="btn">国际</a>
							<a href="javascript:void(0)" data-channel="news_fashion" data-query="channel=news_fashion" class="btn">时尚</a>
						</div>
					</div><span></span>
					<div>
						<content id="pageletListContent" class="feed-list-container">
							<router-view></router-view>
						</content>
					</div>
					<div class="MIHDLUNovFWfI">
						<div class="IZiCLPUAvWIcF">
							<div class="icon-container"><img src="./《今日头条》你关心的,才是头条! - TouTiao.com_files/bonus_icon@3x_f4035aa1.png" class="Skj"></div>
						</div>
					</div>
					<!-- react-empty: 42 -->
					<!-- react-empty: 43 -->
				</div>
			</div>
		</div>
		</div>
	`,
	router:router
})
