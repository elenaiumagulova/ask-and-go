"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

var app = express();
var CommonFunctions = require("./CommonFunctions");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

class Router {
  constructor() {
    app.use("/css", express.static(ROOT + "/templates/css"));
    app.use("/js", express.static(ROOT + "/templates/js"));
    app.use("/assets", express.static(ROOT + "/templates/assets"));
    this.port = 8080;
    this.routes = {
      "get": {
        "/": "index/index",
        "/about": "index/about",
        "/improve": "index/improve",
        "/contacts": "index/contacts",
        "/login": "auth/login",
        "/signup": "auth/register",
        "/dashboard": "dashboard/index",
        "/dashboard/place": "dashboard/place",
        "/search": "search/index",
        "/search/~[0-9+]~": "search/result",
      },
      "post": {
        "/api/login": "auth/loginRequest",
        "/api/register": "auth/registerRequest",
        "/api/getPlaces": "api/getPlaces", // List of Places
        "/api/addPlace": "api/addPlace",
        "/api/sendImprove": "api/sendImprovementMessage",
        "/api/logout": "auth/logout"
      }
    }

  }

  start() {
    this.handleRequests();
    app.listen(this.port, function() {
      console.log(`Running server on ${this.port}`);
    }.bind(this));
  }

  handleRequests() {

    for (let gets in this.routes.get) {
      app.get(gets, function(req, res) {
        let co_ac = this.routes.get[req.url].split("/");
        let controllerName = CommonFunctions.capitalize(co_ac[0]) + "Controller";

        let controller_req = require(ROOT + "/controllers/" + controllerName);
        let controller = new controller_req[controllerName]();

        let actionName = "action" + CommonFunctions.capitalize(co_ac[1]);
        let renderPath = controller[actionName](req, res);
        res.sendFile(renderPath);

      }.bind(this));
    }

    for (let posts in this.routes.post) {
      app.post(posts, function(req, res) {
        let co_ac = this.routes.post[req.url].split("/");
        let controllerName = CommonFunctions.capitalize(co_ac[0]) + "Controller";

        let controller_req = require(ROOT + "/controllers/" + controllerName);
        let controller = new controller_req[controllerName]();

        let actionName = "action" + CommonFunctions.capitalize(co_ac[1]);

        let response = controller[actionName](req, res);
        if (response !== undefined) res.send(response);
      }.bind(this));
    }
  }



}

module.exports.Router = Router;
