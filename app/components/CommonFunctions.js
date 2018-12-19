'use strict';

var CommonFunctions = module.exports = {
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  getJSON() {
    console.log("REST API CALL");
  },

  getTime() {
    let d = new Date();
    let hh = d.getHours() < 10 ? 0 + "" + d.getHours() : d.getHours();
    let mm = d.getMinutes() < 10 ? 0 + "" + d.getMinutes() : d.getMinutes();
    let ss = d.getSeconds() < 10 ? 0 + "" + d.getSeconds() : d.getSeconds();
    return hh + ":" + mm + ":" + ss;
  },

  isEmail(email) {
    return new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(email);
  }
}
