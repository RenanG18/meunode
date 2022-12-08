var fs = require("fs");


fs.appendFile( 'novoArquivo.txt', 'Texto: Vai aparecer dentro do arquivo', function(err){
if(err) throw err;
console.log('Arquivo criado com sucesso!!!');

} );