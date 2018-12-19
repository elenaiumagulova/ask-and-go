'use strict';

class DashboardController {
  constructor() {
    this.root = ROOT + "/views/dashboard";
  }

  actionIndex(req, res) {
    if (req.cookies.user) return this.root + "/index.html";
    else res.redirect("/login");
  }


}


exports.DashboardController = DashboardController;
