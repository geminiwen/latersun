var http	= require("http");
var url		= require("url");
var PORT	= require('./config').PORT;
function start(route,handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		route(pathname,handle,request,response);
	}
	http.createServer(onRequest).listen(PORT);
}

exports.start = start;
