var http	= require("http");
var url		= require("url");
var PORT	= require('./config').PORT;
function start(route,handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname  + " received.");
		route(pathname,handle,request,response);
	}
	 http.createServer(onRequest).listen(PORT);
	 console.log("Server has started.");
}

exports.start = start;
