const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

var router = {
  index: function(request, response) {
    fs.readFile('./template/index.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    })
  },
  login: function(request, response) {
    // get请求
    // var urlObj = url.parse(request.url, true).query;
    // console.log(urlObj);

    //post
    var post = "";
    // 给request绑定data事件， 当request接收事件时触发
    request.on('data', function(chunk) {
      post += chunk;
    })

    //当接收事件完成时触发
    request.on('end', function() {
      var urlObj = querystring.parse(post);
      console.log(urlObj);
    })

    fs.readFile('./template/login.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    })
  },
  registor: function(request, response) {
    fs.readFile('./template/registor.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    })
  }
}

module.exports = router;
