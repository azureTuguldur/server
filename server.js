const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const usersRoute = require("./routes/users");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3376",
  user: "root",
  password: "",
  database: "azure_db",
});

const port = 8000;
const server = express();

server.use(cors());
server.use(express.json());

server.use("/users", usersRoute);

server.get("/:id", (req, res) => {
  connection.query("SELECT * FROM azure_user", (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }

    res.status(200).json({ message: "Huselt Amjilttai", data: result });
  });
  // res.json({ message: "Hello From Express Server" });
});

server.get("/", (req, res) => {
  connection.query("SELECT * FROM azure_user", (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }

    res.status(200).json({ message: "Huselt Amjilttai", data: result });
  });
  // res.json({ message: "Hello From Express Server" });
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

module.exports = server;
