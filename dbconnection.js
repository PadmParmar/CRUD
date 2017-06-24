var mysql = require('mysql');
console.log("inside dbconnection");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pdf"
});
module.exports = connection;