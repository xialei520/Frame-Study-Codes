// 插入
db.admin.insertOne({name: 'tomcat'})

db.admin.insert([{name: 'jerry', sex: 'man'}, {username: 'jim', pwd:'123456'}, {name: 'jack', address: {country: 'China', province: 'shandong', aaa: {a1: '1', a2: '2'}}}])

db.admin.insert([{name: 'zhangsan', sex: 'man', age: '12', height: '180'}])



//查询, 0不显示，1显示
db.admin.find()
//find(查询条件，显示指定属性)
db.admin.find({name: 'tomcat'})
db.admin.find({name: 'zhangsan'},{sex:0,height:0})
db.admin.find({name: 'zhangsan'},{name:1,age:1})
db.admin.find({name: 'tomcat'}).sort({_id:-1}) //排序，1升序， -1降序
db.admin.find({name: 'tomcat'}).size()  //符合条件的数量

select pwd admin where name='tomcat' order by id DESC

// 修改
db.admin.update(
  {name: 'jerry'},
  {
    $set: {}
  }
)

//修改符合条件的第一条数据
db.admin.update(
  {name: 'tomcat'},
  {
    $set: {email: 'aaa@163.com'}
  }
)
//修改符合条件的所有数据
db.admin.updateMany(
  {name: 'mary'},
  {
    $set: {age: '22'}
  }
)

//删除
//删除符合条件的第一条数据
db.admin.deleteOne({name: 'mary'})

// 删除符合条件的所有数据
db.admin.remove({name: 'tomcat'})

db.dropDatabase()
