var http = require("http");
var fs = require("fs");
var createWriteStream = fs.createWriteStream("./images/1.png")
http.get("http://yanxuan.nosdn.127.net/5a1bd3a9a20228f076c5ead728aed3cd.png?imageView&quality=95&thumbnail=245x245",function(res){
	res.pipe(createWriteStream)
})