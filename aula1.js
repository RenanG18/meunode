var http = require('http');
var dia = require('./biblioteca')
http.createServer(function (req, res){

    res.writeHead(200, {'Content-Type':'text/html' });
    res.write('<h2 align = center>Brasil 2x0 Servia</h2>');
    res.write(Date().substring(16, 24)+'<br>');
    res.write('<p align = center >'+dia.diaDaSemana()+'</p>'+'<BR>');
    res.end('<p style=color:green> Uma pena....</p>');

}).listen(3000);