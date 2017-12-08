var router = angular.module("router", []);
// 路由
router.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("index", {
    url: "/index",
    templateUrl: "./template/index.html",
    //controller:"indexCtrl"
  })
  $urlRouterProvider.when("", "/index")
})
