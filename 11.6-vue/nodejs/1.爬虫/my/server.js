var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio")
//var mysql = require('mysql');
//var connection = mysql.createConnection({
//	host: 'localhost',
//	user: 'test',
//	password: '123456',
//	database: 'taobao'
//});
//connection.connect();

fs.readFile("./taobao.html", function(err, data) {
	if(err) throw err;
	console.log(data.toString());
	var html = data.toString();
	const $ = cheerio.load(html)
	console.log($);
//	console.log($(".item").eq(2).find("img").attr("src"))
	/*var item = $(".item");
	for(var i = 0; i < item.length; i++) {
		console.log($(".item").eq(i).find("img").attr("src"));
		console.log($(".item").eq(i).find("span").eq(5).html());
		console.log($(".item").eq(i).find("span").eq(8).html());
		var img = $(".item").eq(i).find("img").attr("src");
		var title = $(".item").eq(i).find("span").eq(5).html();
		var price = $(".item").eq(i).find(".price span").eq(2).html()?$(".item").eq(4).find(".price span").eq(2).html():0
		connection.query(`INSERT INTO goods (img, title, price) VALUES ('${img}','${title}',${price})`, function(error, results, fields) {
			if(error) throw error;
			//console.log('The solution is: ', results[0]);
		});
	}*/
});