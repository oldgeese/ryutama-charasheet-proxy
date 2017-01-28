var http = require('http');
var httpProxy = require('http-proxy');

httpProxy.createProxyServer({target: 'http://charasheet.vampire-blood.net/'}).listen(8080);
