//nodejs直连mysql
const mysql = require("mysql");

//连接数据库权限认证
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'user',
	port: '3306'
})
 
//创建连接
connection.connect(function(err){
	if(err){
		console.log(err);
		return;
	}else{
		console.log("数据库连接成功");
	}
})


/*// 查询
var name = "xiaowang";
var selectUser = "select password from admin where username=?";
params = ['xiaowang']
connection.query(selectUser, params, function(err, results) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(results[0].password);
    }
})*/

// 修改
/*var updateUser = 'update admin set username="xiaoxia" where id="3"';
connection.query(updateUser, function(err, results) {
      if (err) {
       console.log(err);
       return;
     } else {
       console.log(results);
     }
})*/

//插入
var inserUser = 'insert into admin(username,password) values(?,?)';
var params = ['bbb', '666666'];
connection.query(inserUser, params, function(err, results) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(results);
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