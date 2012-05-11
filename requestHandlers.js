var fs = require("fs");
var handle = {
	'/SayHello':function (response)
				{
					response.writeHead(200,{'Content-Type':'text-plain'});
					response.write('hello ~~');
					response.end();
				}
};
exports.handle = handle;
