var filters = angular.module("filters", []);
// 过滤器
filters.filter("html", function($sce) {
  return function(value) {
    return $sce.trustAsHtml(value)
  }
})
