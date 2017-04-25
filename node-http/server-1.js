var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('<html><head></head><body></body><h1>Hello World</h1></body></html>');
});

server.listen(port, hostname, function () {
  console.log(`Server listening on http://${hostname}:${port}/`);
});
