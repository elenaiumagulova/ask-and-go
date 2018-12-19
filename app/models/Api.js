'use strict';

var CommonFunctions = require(ROOT + "/components/CommonFunctions");
var nodemailer = require("nodemailer");

class Api {

  static sendEmail(options) {
    var smtpTransport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'ask.and.go.noreply@gmail.com',
          pass: 'askandgo'
      }
    });

    smtpTransport.sendMail(options, function(error) {
      if (error) {
        console.log("[" + CommonFunctions.getTime() + "] Mail Error: Message couldn't be sent.", error);
        throw error;
      }
    });
    return true;
  }
}


exports.Api = Api;
