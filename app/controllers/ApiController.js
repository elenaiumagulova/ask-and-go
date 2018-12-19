'use strict';
var a = require(ROOT + "/models/Api");
var Api = a.Api;

var CommonFunctions = require(ROOT + "/components/CommonFunctions");

class ApiController {

  actionSendImprovementMessage(req, res) {
    if (!req.body.name || !req.body.text || !req.body.email) {
      return { "success": false, "message": "Please fill all fields." };
    } else {
      if (!CommonFunctions.isEmail(req.body.email)) {
          return { "success": false, "message": "Please enter a valid email." };
          
      } else {
        let options = {
          to: "filipp.sher@gmail.com",
          subject: "[IMPROVE MESSAGE] from " + req.body.name + " ("+req.body.email+")",
          html: "<h4 style='font-family: sans-serif;'>New Improvement Suggestion</h4><div style='padding: 10px; background-color: #EEE;'>" + req.body.text.replace(new RegExp('\n', 'g'), '<br>') + "</div><br><p>Email: " + req.body.email + "</p>",
        }
        if (Api.sendEmail(options)) {
          return { "success": true, "message": "Thank you for the feedback!"};
        } else {
          return { "success": false, "message": "Failed to send a message. Please try again later." };
        }
      }

    }


  }

}


exports.ApiController = ApiController;
