var staticfile = require('./staticFile');
function route(pathname,handle,request,response)
{
	console.log(pathname);
	if( typeof handle[pathname] == 'function' )
	{
		handle[pathname](request,response);	
	}
	else
	{
		staticfile.get(pathname,request,response);
	}
}
exports.route = route;
