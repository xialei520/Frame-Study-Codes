var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");

//搭建mongodb客户端
var MongoClient = mongodb.MongoClient;
//创建数据库地址，user库
var DB_CONN_STR = "mongodb://localhost:27017/user";

router.get("/" , function(req, res, next){
	res.send("respond with a resource");

})
//注册
router.all("/registor", function(req, res){
	var username = req.body["username"];
	var pwd = req.body['pwd'];
	var data = [{username: username, password: pwd}];

	//对数据库进行操作
	function insertData(db){
		var conn = db.collection("admin");
		conn.insert(data, function(err, results){
			if(err){
				console.log(err);
				return;
			}else{
				//在登陆和注册成功之前，对session对象进行验证
				req.session.username= username;
				res.redirect('/');
				//关闭数据库
				db.close();
			}
		})
	}

	//通过mongoClient链接数据库，
	MongoClient.connect(DB_CONN_STR, function(err, db){
		if(err){
			console.log(err);
			return;
		}else{
			console.log("数据库连接成功");
			insertData(db);
		}
	})
})
//登陆
router.all("/login", function(req, res){
	var username = req.body["username"];
	var pwd = req.body["pwd"];
	console.log(username)
	console.log(pwd)

	var data = {username:username, password:pwd};

	//操作数据库
	function findData(db){
		var conn = db.collection("admin");
		conn.find(data, {username:0, password:0}).toArray(function(err, results){
			console.log(err)
			if(results.length > 0){
				
				req.session.username= username;
				console.log(username);

				res.redirect("/");
			}else{
				res.redirect("/login");
			}
		})  
			
		 
	}
	if(username&&pwd){
		MongoClient.connect(DB_CONN_STR, function(err, db){
			if(err){
				console.log(err);
				return;
			}else{
				console.log("aaa")

				findData(db);
			}
		})
	}else{
		res.redirect("/login");
	}
	
	
})

router.all("/ajax", function(req, res){
	var obj = {
		message:"123",
		name:'xl'
	}
	res.send(obj);
})
module.exports = router;
