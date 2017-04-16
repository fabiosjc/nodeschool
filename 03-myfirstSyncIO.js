var fs = require('fs')  // necessário para realizar operações no filesystem
var buffer = fs.readFileSync(process.argv[2])  //lê o arquivo passado (deve ser o primeiro argumento)
var newLines = buffer.toString().split("\n").length - 1;

console.log(newLines);