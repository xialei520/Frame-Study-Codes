var express = require("express");
var app = express();
 app.get("/index", function(req, res){
  res.send(123)
})
app.listen(8888);
