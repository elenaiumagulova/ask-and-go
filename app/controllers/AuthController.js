'use strict';

var a = require(ROOT + "/models/Auth");
var Auth = a.Auth;
var crypto = require('crypto');

class AuthController {
  constructor() {
    this.root = ROOT + "/views/auth";
  }

  actionLogin(req, res) {
    if (!req.cookies.user) return this.root + "/login/index.html";
    res.redirect('/dashboard');
  }

  actionRegister(req, res) {
    if (!req.cookies.user) return this.root + "/reg/index.html";
    res.redirect('/dashboard');
  }

  actionLoginRequest(req, res) {
    let login = req.body.login;
    let pass = crypto.createHash('sha256').update(req.body.pass).digest("hex");

    Auth.login(login, pass, req, res);


  }

  actionLogout(req, res) {
    res.clearCookie("user")
    res.clearCookie("id");
    res.send({ "success": true})
  }


  actionRegisterRequest(req, res) {
    let login = req.body.login;
    let pass = crypto.createHash('sha256').update(req.body.pass).digest("hex");
    let pass2 = crypto.createHash('sha256').update(req.body.pass2).digest("hex");
    let email = req.body.email;
    let last_ip = "192.168.1.1";
    // console.log(req);

    Auth.register(login, pass, pass2, email, last_ip, req, res);
  }
}

exports.AuthController = AuthController;
