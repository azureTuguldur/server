const mysql = require("mysql2");

module.exports = conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3376",
  password: "",
  database: "azure_db",
});
