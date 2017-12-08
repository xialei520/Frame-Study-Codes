console.log("123")
var Vue = require("./node_modules/vue/dist/vue.js")
//import Vue from "./node_modules/vue/dist/vue.js";
console.log(Vue)
interface dataType {
  name: string
}
let data: dataType = {
  name: "qd"
}
new Vue({
  el: "#demo",
  data: data,
  template:`
    <div>{{name}}</div>
  `
})
