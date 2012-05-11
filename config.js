var PORT	= 8080;
var DEBUG	= true; 
exports.Expires = {
	fileMatch	:  /^(gif|png|jpg|js|css)$/ig,
	maxAge		:  60 * 60 * 24 * 365
};
exports.Compress = {
	match: /css|js|html/ig
};
exports.PORT = PORT;
exports.WelcomeFile = "index.html";
exports.DEBUG = function ( e )
{
	if(DEBUG)
	{
		console.log(e);
	}
}
