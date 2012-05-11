var staticfile	= require('./staticFile');
var welcomefile	= require('./config').WelcomeFile;
var DEBUG		= require('./config').DEBUG;
function route(pathname,handle,request,response)
{
	if ( pathname.slice(-1) == "/") 
	{
		pathname += welcomefile;
	}
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
