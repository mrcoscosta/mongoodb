//const { Person } = require("./person");
//const person = new Person("marcos", 22, 1.8);
//console.log(person.Diga());

const dotenv = require("dotenv");
const connectToDatabase = require("./SRC/connect");

dotenv.config();

connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
//require("./modules/express");

//require("./app.js");
