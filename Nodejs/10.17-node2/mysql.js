// nodejs直连mysql
const mysql = require('mysql');

// 连接数据库， 权限认证
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user',
  port: '3306'
});

// 创建连接
connection.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('数据库连接成功');
  }
})

// 插入
// var inserUser = 'insert into admin(username,password) values("aaa","2333")';
// 执行数据库操作
// connection.query(inserUser, function(err, results) {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(results);
//   }
// })

// var inserUser = 'insert into admin(username,password) values(?,?)';
// var params = ['bbb', '666666'];
// connection.query(inserUser, params, function(err, results) {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(results);
//   }
// })

// 查询
var name = "tomcat";
var selectUser = "select password from admin where username=?";
params = ['tomcat']
connection.query(selectUser, params, function(err, results) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(results[0].password);
    }
})

// 修改
// var updateUser = 'update admin set password="555555" where username="bbb"';
// connection.query(updateUser, function(err, results) {
//       if (err) {
//        console.log(err);
//        return;
//      } else {
//        console.log(results);
//      }
// })

// 删除
// var deleteUser = 'delete from admin where username="aaa"';
// connection.query(deleteUser, function(err, results) {
//   if(err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(results);
//   }
// })




// 关闭连接
connection.end(function(err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('连接已关闭');
  }
})
