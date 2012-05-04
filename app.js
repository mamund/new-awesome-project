// sample app

var http = require('http');

function handler(req, res) {
    var str = '<h1>Hello, StirTrek from ' + req.url + '</h1>';
    res.writeHead(200, 'OK', {'content-type' : 'text/html'});
    res.end(str);
}
http.createServer(handler).listen(process.env.PORT || 1337);
