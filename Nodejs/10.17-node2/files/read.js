const fs = require('fs');

var readfile = {
  readFileSync: function(file, response) {
    //同步读取文件
    var data = fs.readFileSync(file ,'utf-8');
    return data;
  },
  //异步读取
  readFile: function(file, response) {
    fs.readFile(file,'utf-8',function(err, data) {
      response.write(data);
      response.end();

    })
  },

  // 异步写入
  writeFiel: function(file, response) {
    // fs.writeFiel()
    fs.writeFile(file, 'Hello Node.js', (err) => {
      if (err) throw err;

      console.log('The file has been saved!');
      response.end();
    });
  }
}

module.exports = readfile;
