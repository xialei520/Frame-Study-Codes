var components = angular.module("components", []);
// 组件
components.component("xheader", {
  // V
  templateUrl: "./components/xheader/xheader.html",
  // C
  controller: function($scope) {}
})

components.component("xsearch", {
  // V(css+html)
  templateUrl: "./components/xsearch/xsearch.html",
  // C(js)
  controller: function($scope) {}
})

components.component("xpanel", {
  // V
  templateUrl: "./components/xpanel/xpanel.html",
  // C
  controller: function($scope) {
    // M
  }
})
