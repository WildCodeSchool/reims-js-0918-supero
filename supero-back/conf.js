const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection({
  host: "localhost", // adresse du serveur
  user: process.env.DEV_USER,
  password: process.env.DEV_PASSWORD,
  database: "supero"
});
module.exports = connection;
