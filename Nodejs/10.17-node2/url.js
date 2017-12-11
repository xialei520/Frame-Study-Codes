const http = require('http');
const router = require('./files/router.js');

http.createServer(function(request, response) {
  // respone: 返回给客户端信息
  // request: 接受客户端发来的信息
  if(request.url != '/favicon.ico') {
    // 筛选url里的有效信息
    var path = request.url.split('?')[0].replace(/\//, '');
    console.log(path);
    //请求头
    response.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});



    try {
      router[path](request, response);
    } catch(err) {
      router.index(request, response)
    }


  }
}).listen(3000)

console.log("Server is running at http://localhost:3000");
