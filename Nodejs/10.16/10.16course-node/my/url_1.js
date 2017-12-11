const http = require("http");
const router = require("./template/router.js");
// const read = require("./template/read.js");
http.createServer(function(request, response){
	if(request.url != "/favicon.ico"){
		console.log(request.url);
		var path = request.url.split("?")[0].replace(/\//, "");
		console.log(path);
		response.writeHead(200,{"Content-Type":"text/html, charset:utf-8"});

		try{
	      router[path](request, response);
	    } catch(err){
	      router.index(request, response);
	    }
	}
}).listen(5000);
console.log("Server is running at localhost:5000")