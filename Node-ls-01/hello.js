
/*
var add = require('doAdd');
add(1,1, function(res) {
    console.log(res);
});
*/

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello');
}).listen(1330);
console.log('started');
