const mongoose = require("mongoose");
const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://marcos:9632580@nodejs.ceqmuoh.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro ao se conectar ao banco de dados");
      }

      console.log("Conexão ao banco de dados Realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
