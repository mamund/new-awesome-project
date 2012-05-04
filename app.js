// sample app

var http = require('http');

function handler(req, res) {
    res.writeHead(200, 'OK', {'content-type' : 'text/html'});
    res.end('<h1>Hello, StirTrek from ' + req.url + '</h1>');
}
http.createServer(handler).listen(process.env.PORT || 1337);
