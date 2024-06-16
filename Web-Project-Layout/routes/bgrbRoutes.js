// routes/bgrbRoutes.js
const express = require('express');
const router = express.Router();
const bgrbController = require('../controllers/bgrbController');

// Route to render manage reservations page
router.get("/", (req, res) => {
    console.log("Received request to render bgrb page");
    bgrbController.getBgrbPage(req, res);
  });
  
  module.exports = router;

module.exports = router;
