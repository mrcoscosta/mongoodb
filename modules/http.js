const { json } = require("express");
const htttp = require("http");
const { url } = require("inspector");

const port = 8080;

const server = htttp.createServer((req, res) => {
  if (url === "/home") {
    res.writeHead(200, { "contet-type": "text/txt" });
    res.wend("Hello word");
  }
  if (url === "/users") {
    const users = [
      {
        nome: "marcos",
        age: 22,
      },
      {
        nome: "Erica",
        age: 20,
      },
    ];
    res.writeHead(200, { "contet-type": "application/json" });
    res.wend(JSON.stringify(users));
  }
});
server.listen(port, () => console.log("rodando na porta 8080"));
