var services = angular.module("services", []);
// 服务
services.service("store", function() {
  return {state: {}}
})
