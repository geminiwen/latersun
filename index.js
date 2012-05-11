var server			= require('./server');
var router			= require('./router');
var handle			= require('./requestHandlers').handle;


server.start(router.route,handle);

