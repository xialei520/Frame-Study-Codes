const http = require("http");
const read = require("./template/read.js");
http.createServer(function(require, response){
	if(require.url != "/favicon.ico"){
		console.log(require.url);

		response.writeHead("200", {"content-type": "text/html;charset:utf-8"})
		// response.write("hello world");
		/*response.write(read.readFileSync('./template/index.html', response));*/
		// read.readFile('./template/index.html', response);
		read.writeFile("./template/index.html",response);
		console.log("sss");
		/*response.write(read.readFileSync('./template/message.txt', response));*/
		// response.end();
	}
	
}).listen(4000)
console.log("Server is run at http://localhost:4000");