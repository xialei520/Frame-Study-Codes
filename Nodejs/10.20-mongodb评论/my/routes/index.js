var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");
const async = require("async");//要先在本地安装async

var MongoClient = mongodb.MongoClient;
var CONN_DB_STR = 'mongodb://localhost:27017/user';

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', function(req, res, next) {
	console.log()
  res.render('index', {title: '123', username: req.session.username});
});

router.get('/login', function(req, res, next) {
   res.render("login", {});
});
router.get('/registor', function(req, res, next) {
   res.render("registor", {});
});

router.get('/logout', function(req, res, next) {
   req.session.username = undefined;
   res.redirect("/");
});

router.get('/comment', function(req, res, next) {
   res.render("comment", {});
  
});
//详情
router.get('/detail', function(req, res, next) {
   res.render("detail", {});
  
});

//列表
router.all('/list', function(req, res) {
	var pageNo = req.query['pageNo'] || 1;//当前第x页
	var pageSize = 5;//每页显示5条数据
	var totalpage = 0;//共有多少页
	var count = 0;//共几条数据



	function findData(db){
		var conn = db.collection("comment");
		async.series([
			function(callback){
				conn.find().toArray(function(err, results){
					 
					count = results.length;
					totalpage = Math.ceil(count / 5);
					pageNo = pageNo > totalpage?totalpage:pageNo;
					pageNo = pageNo < 1?1:pageNo;
					callback(null, "");
				})
			},
			function(callback){
				//sort:让他倒叙
				//skip从第几条开始显示数据
				//limit显示多少条数据
				conn.find({}).sort({_id: -1}).skip((pageNo-1)* 5).limit(pageSize).toArray(function(err, results){
					console.log(results);
					callback(null, results);
				})
			}
		], 
			function(err, results){
				//results:["", []];
				res.render("list", {
					resData:results[1],
					count:count,
					totalpage:totalpage,
					pageNo:pageNo
				});

				
			}
		)
	}
	MongoClient.connect(CONN_DB_STR, function(err, db){
		findData(db)
	})
  
});
module.exports = router;
