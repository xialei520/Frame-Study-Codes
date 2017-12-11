const mongodb = require('mongodb');

// 权限认证
var server = new mongodb.Server(
  'localhost',
  27017,
  {auto_reconnect: true} //以自动连接的形式访问数据库
)

// 创建db的连接
var db = new mongodb.Db(
  'user', //所要连接的库
  server,
  {safe: true} //以安全形式访问
)

// 打开数据库
db.open(function(err, results) {
  if(err) {
    console.log(err);
    return
  } else {
    console.log('mongodb success~');
    //对user下admin进行操作
    db.collection('admin', {safe: true}, function(err, conn) {
      if(err) {
        console.log(err);
        return
      } else {
        console.log(conn);
        //增删改查
        conn.find({name: 'jerry'},{sex:0}).toArray(function(err, results) {
          if(!err) {
            results.forEach(function(val) {
              console.log(val);
            })
          }
        })
      }
    })
  }
})








//
