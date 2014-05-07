console.log("this is json parser");
var fs = require("fs");
var file = __dirname + "/sample.json"
console.log(__dirname);

fs.readFile(file, 'utf8', function(err, data) {
	if (err) {
		console.log("Error:" + err);
		return;
	}

	var jobj = JSON.parse(data);
	iterateJsonObject(jobj);
});


var indent = 0;

function iterateJsonObject(obj) {
	for (var key in obj) {
		for (var i = indent; i > 0; i--)
			process.stdout.write("\t");
		process.stdout.write(key);
		if (obj[key] instanceof Object) {
			indent++;
			process.stdout.write(":{");

			for (var i = indent - 1; i > 0; i--)
				process.stdout.write("\t");
			console.log();
			iterateJsonObject(obj[key]);
			for (var i = indent - 1; i > 0; i--)
				process.stdout.write("\t");
			console.log("}");
			indent--;

		} else {
			process.stdout.write(":" + obj[key]);
			console.log("");
		}
	}
}