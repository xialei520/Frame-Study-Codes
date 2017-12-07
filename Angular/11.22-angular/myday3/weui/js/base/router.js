var router = angular.module("router", []);

router.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("index", {
    url:"/index",
    templateUrl:"./template/index.html"
  })
  $urlRouterProvider.when("", "/index")
})
