var http = require('http');
var httpProxy = require('http-proxy');
var port = process.env.PORT || 8080;

httpProxy.createProxyServer({target: 'http://charasheet.vampire-blood.net/'}).listen(port);
