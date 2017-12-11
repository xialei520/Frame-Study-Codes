const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const async = require("async");

var MongoClient = mongodb.MongoClient;
var CONN_DB_STR = 'mongodb://localhost:27017/user';

//评论
router.all("/talk", function(req, res){
	var title = req.body["title"];
	var val = req.body["val"];
	var username = req.session.username;

	
	console.log(username);
	//将数据插入数据库
	function insertData(db){
		var conn = db.collection("comment");
		var ids = db.collection("ids");//此集合用于存储数据的唯一标识
		async.waterfall([
			function(callback){
				//查询并更新数据
				ids.findAndModify(
					{name:"comment"},//查询条件
					[["_id","desc"]],//排序
					{$inc:{cid:1}},//自增 cid = cid + 1;
					function(err, results){
						console.log(results);
						callback(null, results);
					}
				)
			},
			function(cid, callback){
				var data = [{cid:cid, username:username,title:title, val: val}];
				conn.insert(data, function(err, results){
					if(err){
						console.log(err);
						return;
					}else{
						callback(null, "");
					}
					db.close();
				})

			}
		], function(err, results){
			 res.redirect("/list");
			
		})
	}
	if(!username){
		res.send('<script>alert("登陆超时，请重新登陆");location.href= "/login"</script>');
	}else{
		MongoClient.connect(CONN_DB_STR, function(err, db){
			if(err){
				console.log(err);
				return;
			}else{
				console.log("数据库连接成功");
				insertData(db);
			}
		})
		
	}
})

module.exports = router;