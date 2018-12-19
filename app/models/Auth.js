'use strict';
var db = require(ROOT + "/components/Db");
var CommonFunctions = require(ROOT + "/components/CommonFunctions");
var DB = db.Db;

class Auth {

  static login(login, password, req, res) {
    DB.query(`SELECT * FROM users WHERE login = "${login}" AND password = "${password}"`, function(result) {
      if (result["success"]) {
        let rows = result["rows"];

        if (rows.length > 0) {
          res.cookie("user", rows[0]["login"], { httpOnly: true });
          res.cookie("id", rows[0]["id"], { httpOnly: true });
          res.send({ "success": true, "user": rows[0]["login"] });
        } else {
          res.send({ "success": false, "message": "Wrong username or password." });
        }
      } else {
        res.send(result);
      }
    });

  }

  static register(login, pass, pass2, email, last_ip, req, res) {
    DB.query(`SELECT * FROM users WHERE login = "${login}"`, function(result) {
      if (result["success"]) {
        let rows = result["rows"];
        let error = false;
        let messages = [];

        if (rows.length > 0) {
          error = true;
          messages.push("User already exists.");
        }

        if (pass != pass2) {
          error = true;
          messages.push("Passwords aren't the same.");
        }

        if (!CommonFunctions.isEmail(email)) {
          error = true;
          messages.push("Email isn't valid.");
        }

        if (!error) {
          DB.query(`INSERT INTO users(login, password, email, last_ip) VALUES ("${login}", "${pass}", "${email}", "${last_ip}")`, function(result) {
            if (result["success"]) {
              res.send({ "success": true });
            } else {
              res.send(result);
            }
          });
        } else {
          res.send({ "success": false, "message": messages });
        }
      } else {
        res.send(result);
      }
    });
  }
}

exports.Auth = Auth;
