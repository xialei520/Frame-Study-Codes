import angular from "angular";
const app = angular.module("ngApp", [])

app.controller("index", ($scope)=>{
  $scope.name="qd",
  $scope.skill = "ps"
})
