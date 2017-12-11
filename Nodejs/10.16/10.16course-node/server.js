const http = require('http');
const read = require('./files/read.js');

http.createServer(function(request, response) {
  // respone: 返回给客户端信息
  // request: 接受客户端发来的信息
  if(request.url != '/favicon.ico') {
    console.log(request.url);
    //请求头
    response.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});

    // response.write(read.readFileSync('./template/index.html', response));

    // read.readFile('./template/index.html', response);

    // response.write(read.readFile('./template/index.html', response))

    // response.write('hello world~');

    // response.end()

    read.writeFiel('./template/message.txt', response)


  }
}).listen(3000)

console.log("Server is running at http://localhost:3000");
