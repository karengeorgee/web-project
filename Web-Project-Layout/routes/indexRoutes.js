const express = require("express");
const app = express();

app.get("/SJAK", (req, res) => {
  res.render("SJAk", {
    currentPage: "SJAK",
    user: req.session.user === undefined ? "" : req.session.user,
  });
});



module.exports = app;
