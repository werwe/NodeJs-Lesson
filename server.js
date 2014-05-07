var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		console.log("Request for " + pathname + " received.");
		var content = route(handle, pathname);
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write(content);
		response.end();
		//response.end("Hellow World");
	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log("Server has started.");
}


exports.start = start;