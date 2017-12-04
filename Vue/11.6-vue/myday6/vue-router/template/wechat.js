var wechat = {
  template:`
    <div>
      <router-view></router-view>
      <tabbar></tabbar>

    </div>
  `,
  components:{
    tabbar:tabbar,

  },
  mounted:function(){
    // return redirect("#/wechat/tab1")重定向
  }
}
