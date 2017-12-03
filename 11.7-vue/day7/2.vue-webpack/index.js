var $ = require("jquery");

//js
var tool = require("./js/tool.js");
window.$ = $;
console.log("abc")
console.log(tool)

//txt
var data = require("./txt/data.txt");
console.log(data)

//html
var html = require("./html/index.html");
//document.write(html)

//json
var json = require("./json/data.json");
console.log(json)

//jpg/png/gif
var jpg = require("./images/1.jpg");
var img = document.createElement("img");
img.src = jpg
document.body.appendChild(img)

//css
var css = require("./css/base.css")
