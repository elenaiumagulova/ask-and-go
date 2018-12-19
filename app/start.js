/**
*
* Starting server file.
*
*/
var path = require("path");
var Router = require("./components/Router");

global.ROOT = path.resolve(__dirname);

var App = new Router.Router();
App.start();
