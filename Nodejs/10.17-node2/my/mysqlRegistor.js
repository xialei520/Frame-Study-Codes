const fs = require("fs");
const mysql = require("mysql");

//创建连接
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'user',
	port: '3306'
})
 

//模块化开发，创建查询接口
var mysqlRegistor = {
	insert:function(user, pwd, response){
		connection.connect(function(err){
			if(err){
				console.log(err);
				return;
			}else{
				console.log("数据库连接成功");

			}
		})

 
		var inserUser = 'insert into admin(username,password) values(?,?)';
		var params = [user, pwd];
		//数据库数据插入
		connection.query(inserUser, params, function(err, results){
			if(err){
				console.log(err);
				response.end();
			}else{
				console.log(results);
				response.end();
				 
			}
		})
		//关闭连接
		connection.end(function(err){
			if(err){
				console.log(err);
				return;
			}else{
				console.log("数据库已关闭");
			}
		})

	}
}
module.exports = mysqlRegistor;
