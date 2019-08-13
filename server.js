var http = require('http');
var dateTime = require('./modules');
 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello WIZnet India!');
}).listen(8080);