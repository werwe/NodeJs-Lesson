var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Receivec POST data chunk '" + postDataChunk + "'.");
		});
		route(handle, pathname, response, postData);
	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log("Server has started.");
}

exports.start = start;