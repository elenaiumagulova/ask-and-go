'use strict';

var mysql = require("promise-mysql");

var CommonFunctions = require("./CommonFunctions");
var connection;
mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'askandgo',
  port     : 8889,
}).then(function(conn) {
  connection = conn;
}, function(err) {
  console.log("[" + CommonFunctions.getTime() + "] MySQL Error: " + err);
});


class Db {

  static query(query, callback) {
    connection.query(query).then(function(rows) {
      callback({ "success": true, "rows": rows });
    }, function(err) {
      console.log("[" + CommonFunctions.getTime() + "] MySQL Error: " + err);
      callback({ "success": false, "message": "Something went wrong. Sorry for inconvenience."});
      throw err;
    });
  }

  static close() {
    this.connection.end();
  }
}

exports.Db = Db;
