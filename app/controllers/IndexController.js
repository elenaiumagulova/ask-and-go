'use strict';

class IndexController {
  constructor() {
    this.root = ROOT + "/views/landing";
  }

  actionIndex(req, res) {
    if (!req.cookies.user) return this.root + "/index.html";
    res.redirect('/dashboard');

  }

  actionContacts() {
    return this.root + "/contacts.html";
  }

  actionImprove() {
    return this.root + "/improve_us.html";
  }

  actionAbout() {
    return this.root + "/about_us.html";
  }
}

exports.IndexController = IndexController;
