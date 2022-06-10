// manipular sistemas de arquivos
const fs = require("fs");
const path = require("path");

// Criar uma pasta

fs.mkdir(path.join(__dirname, "/test"), (Error) => {
  if (Error) {
    return console.log("erro :", Error);
  }
  console.log("Pasta criada com sucesso");
});

// Criar um Arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node.js!",
  (error) => {
    if (error) {
      return console.log("erro: ", error);
    }

    console.log("Arquivo criado");
  }
);

// Adicionar um Arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello World!",
  (error) => {
    if (error) {
      return console.log("erro: ", error);
    }

    console.log("Arquivo adicionado ou modificado");
  }
);

// Ler Arquivos
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("erro: ", error);
    }
    console.log(data);
  }
);
