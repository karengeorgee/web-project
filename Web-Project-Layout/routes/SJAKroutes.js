const express = require("express");
const SJAKController = require("../controllers/SJAKController");
const router = express.Router();

// Route for SJAK page
router.get("/", SJAKController.showSJAKPage);

module.exports = router;
