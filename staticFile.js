var path		= require('path');
var fs			= require('fs');
var zlib		= require("zlib");
var mimes		= require('./mime').types;
var config		= require("./config");
var DEBUG		= config.DEBUG;
var get = function (pathname,request,response)
{
	var realPath = "assets" + pathname;
	DEBUG('access for ' + realPath);
	path.exists(realPath,function(exists)
	{
		if(!exists)
		{
			response.writeHead(404,{'Content-Type':'text-plain'});
			response.write('404 error');
			response.end();
		}
		else
		{
			//静态读取文件路由
			fs.readFile(realPath,'binary',function( err, file )
			{
				if(err)
				{
					response.writeHead(500,{'Content-Type':'text/plain'});
					response.end(err);
				}
				else
				{
					fs.stat(realPath, function (err, stat) {
						var lastModified = stat.mtime.toUTCString();
						const ifModifiedSince = "If-Modified-Since";
						if (lastModified == request.headers[ifModifiedSince] && request.headers[ifModifiedSince]){
							response.writeHead(304, "Not Modified");
							response.end();
							return;
						}
						response.setHeader("Last-Modified", lastModified);
						//读取文件后缀名
						var ext = path.extname(realPath);
						ext = ext ? ext.slice(1) : 'unknown';
						//设置缓存
						if (ext.match(config.Expires.fileMatch)) {
							var expires = new Date();
							expires.setTime(expires.getTime() + config.Expires.maxAge * 1000);
							response.setHeader("Expires", expires.toUTCString());
							response.setHeader("Cache-Control", "max-age=" + config.Expires.maxAge);
						}
						response.setHeader("Content-Type",mimes[ext]);

						//将文件进行压缩
						var raw = fs.createReadStream(realPath);
						var acceptEncoding = request.headers['accept-encoding'] || "";
						var matched = ext.match(config.Compress.match);
						if (matched && acceptEncoding.match(/\bgzip\b/)) {
						    response.writeHead(200,{
							        'Content-Encoding': 'gzip'
							 });
							raw.pipe(zlib.createGzip()).pipe(response);
						}else if (matched && acceptEncoding.match(/\bdeflate\b/)) {
							 response.writeHead(200,{
									'Content-Encoding': 'deflate'
							});
							raw.pipe(zlib.createDeflate()).pipe(response);
						}else
						{
							response.writeHead(200);
							raw.pipe(response);
						}

					});
				}
			});
		}
	});
}
exports.get = get;
