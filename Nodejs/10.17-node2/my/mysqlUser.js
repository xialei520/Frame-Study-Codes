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
var mysqlUser = {
	search:function(user, pwd, response){
		connection.connect(function(err){
			if(err){
				console.log(err);
				return;
			}else{
				console.log("数据库连接成功");

			}
		})

		var searchUser = "select password from admin where username=?";
		var params = [user];
		//数据库查询
		connection.query(searchUser, params, function(err, results){
			if(err){
				console.log(err);
			}else{
				console.log(results);
				if(pwd == results[0].password){
					fs.readFile("./template/index.html", "utf-8", function(err, data){
						response.write(data);
						response.end();
					})
				}else{
					fs.readFile("./template/login.html", "utf-8", function(err, data){
						response.write(data);
						response.end();

					})
				}
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
module.exports = mysqlUser;
