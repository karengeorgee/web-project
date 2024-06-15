// routes/menuRoute.js

const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController'); // Adjust path as needed

router.get("/menu", (req, res) => {
  menuController.showMenuPage(req, res);
});

module.exports = router;
