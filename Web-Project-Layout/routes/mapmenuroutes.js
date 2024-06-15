// mapmenuRoute.js

const express = require("express");
const mapmenuController = require("../controllers/mapmenuController");
const router = express.Router();

// Route for mapmenu page
router.get("/", (req, res) => {
  const menu = req.query.menu;
  mapmenuController.showMenu(req, res, menu);
});

router.get("/startGuessing/:countryName", (req, res) => {
  const countryName = req.params.countryName;
  const menu = req.query.menu;
  mapmenuController.startGuessing(req, res, countryName, menu);
});

router.post("/checkGuess/:countryName", (req, res) => {
  const guess = req.body.guess;
  mapmenuController.checkGuess(req, res, guess);
});

router.get("/skipGuess/:menu", (req, res) => {
    const menu = req.params.menu;
    mapmenuController.skipGuess(req, res, menu, () => {
      // After the skipGuess logic, navigate to the menu page.
      res.redirect('/menu');
    });
  });

module.exports = router;
