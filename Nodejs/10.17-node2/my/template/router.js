const fs = require("fs");
const url = require('url');
const querystring = require('querystring');
const mysqlUser = require('../mysqlUser.js');
const mysqlRegistor = require('../mysqlRegistor.js');



var router = {
	index:function(request,response){
		fs.readFile("./template/index.html", "utf-8", function(err, data){
			response.write(data);
			response.end();
		})
	},
	login:function(request,response){
		/*fs.readFile("./template/login.html", "utf-8", function(err, data){
			response.write(data);
			response.end();*/
			/*// get请求
			var urlObj = data.parse(request.url,true).query;
			console.log(urlObj);*/
		// post请求
		var post = "";
		 // 给request绑定data事件， 当request接收事件时触发
		request.on("data", function(chunk){
			post += chunk;
		})
		request.on("end", function(){
			var urlObj = querystring.parse(post);
			console.log(urlObj);
			if(urlObj.user&&urlObj.pwd){
				mysqlUser.search(urlObj.user,urlObj.pwd, response);
			}else{
				fs.readFile("./template/login.html", "utf-8", function(err, data){
				response.write(data);
				response.end();
					
				})
			}
		})
		
		
		
	},
	registor:function(request,response){
		 
		var post = "";
		 // 给request绑定data事件， 当request接收事件时触发
		request.on("data", function(chunk){
			post += chunk;
		})
		request.on("end", function(){
			var urlObj = querystring.parse(post);
			console.log(urlObj);
			if(urlObj.user&&urlObj.pwd){
				mysqlRegistor.insert(urlObj.user,urlObj.pwd, response);
				
			}else{
				fs.readFile("./template/registor.html", "utf-8", function(err, data){
				response.write(data);
				response.end();
					
				})
			}
		})
	}
}
module.exports = router;