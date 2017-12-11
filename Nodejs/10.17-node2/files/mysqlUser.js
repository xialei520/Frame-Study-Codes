const fs = require('fs');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user',
  port: '3306'
});


var mysqlUser = {
  search: function(name, pwd, response) {
    connection.connect(function(err) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('数据库连接成功');
      }
    })

    var searchUser = "select password from admin where username=?";
    params = [name];
    // 数据库查询
    connection.query(searchUser, params, function(err, results) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(results);

          if(pwd == results[0].password) {
          // if(urlObj.pwd == pwd) {
            fs.readFile('./template/index.html', 'utf-8', function(err, data) {
              response.write(data);
              response.end();
            })
          } else {
            fs.readFile('./template/login.html', 'utf-8', function(err, data) {
              response.write(data);
              response.end();
            })
          }

        }
    })

    connection.end(function(err) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('连接已关闭');
      }
    })
  }
}

module.exports = mysqlUser;
