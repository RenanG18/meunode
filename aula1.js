
var http = require('http');
var url = require('url');

var data = require('./primeiromodulo');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<center><h1>Aula de Javascript</h1></center>');
    res.write('<h2>Servidor criado!</h2>');
    res.write('Endereco acessado: '+req.url+'<br>');
    var q = url.parse(req.url, true).query;
    var ano = q.ano;
    var mes = q.mes;
    var cidade = q.cidade;
    res.write('Data: '+mes+'/'+ano);
    res.write('Cidade: '+cidade);
    
    res.end();
}).listen(3000);