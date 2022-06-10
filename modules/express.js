const express = require("express");
const app = express();
//const UserModel = require("../SRC/models/user.model");

app.use(express.json()); // PRA QUANDO AGENTE QUISER USAR JSON NA NOSSA APLICÇAO

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Data : ${new Date()}`); // MIDHORES SAO FUNCOES QUE SAO EXECUTADAS ANTES DA REQUIS
  console.log(`Request Type: ${req.headers}["content-type"]`);

  next();
});

/////////////////////////////////////// PEGAR / BUSCAR
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.json(users);
  } catch (error) {
    return res.send(error.message);
  }
});

////////////////////////////////////// CRIAÇAO
app.post("/users", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);

    res.json(users);
  } catch (error) {
    return res.send(error.message);
  }
});

/////////////////////// ATUALIZAÇAO
app.patch("/users/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const users = await UserModel.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    response.json(users);
  } catch (error) {
    return response.send(error.message);
  }
});
/////////////////////////// BUSCAR POR ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findById(id);
    res.json(users);
  } catch (error) {
    return res.send(error.message);
  }
});
///////////////// DELEÇAO

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findByIdAndDelete(id);

    res.json(users);
  } catch (error) {
    return res.send(error.message);
  }
});
/////////////////////////
app.listen(4040, () => console.log("rodando com express na porta 4040"));
