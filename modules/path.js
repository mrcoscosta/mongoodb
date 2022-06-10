const path = require("path");
// Apenas o nome do Arquivo atual - basename
console.log(path.basename(__filename));

// O nome do diretorio Atual
console.log(path.dirname(__filename));

// Exetençao do Arquivo
console.log(path.extname(__filename)); // FILENAME => Armazena nosso arquivo atual

// Criar um Objeto
console.log(path.parse(__filename));

//junta camimhos de arquivos
console.log(path.join(__dirname, "emecast", "html")); // FILENAME => Armazena nosso arquivo atual
