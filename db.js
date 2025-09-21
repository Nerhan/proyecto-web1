const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mi_basedatos"
});

db.connect();

module.exports = db;
