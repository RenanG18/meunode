var http = require('http');

http.createServer(function (req, res){

    res.writeHead(200, {'Content-Type':'text/html' });
    res.write('<h2>Brasil 2x0 Servia</h2>');
    res.write(Date().substring(16, 24)+'<br>');
    res.end('Uma pena....');

}).listen(3000);