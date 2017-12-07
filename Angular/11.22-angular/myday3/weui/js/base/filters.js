var filters = angular.module("filters", []);
filters.filter("html", function($sce){
  return function(value){
    return $sce.trustAsHtml(value)
  }
})
