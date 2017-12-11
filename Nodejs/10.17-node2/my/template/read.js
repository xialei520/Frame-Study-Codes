const fs = require("fs");
var readfile = {
	readFileSync:function(file, response){
		var data = fs.readFileSync(file, "utf-8");
		return data;
	},
	readFile:function(file,response){
		fs.readFile(file, "utf-8", function(err, data){
			response.write(data);
			response.end();
		});
	},

	//异步写入
	writeFile:function(file, response){
		fs.writeFile(file, "hello Node.js", (err) =>{
			if (err) throw err;
			console.log("this file has saved");
			response.end();
		})
	}
}
module.exports = readfile; 