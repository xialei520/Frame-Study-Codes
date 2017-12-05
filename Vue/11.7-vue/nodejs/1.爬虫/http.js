var http = require("http");
//console.log(http)
http.createServer(function(req,res){
	res.end("你好")
}).listen(8899)