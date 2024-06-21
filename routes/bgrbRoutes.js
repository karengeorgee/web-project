// routes/bgrbRoutes.js
const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const reservationModel = require("../models/reservationModel");
const router = express.Router();
const bgrbController = require("../controllers/bgrbController");

// Route to render manage reservations page
router.get("/", (req, res) => {
  console.log("Received request to render bgrb page");
  bgrbController.getBgrbPage(req, res);
});

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId))
    return res.status(404).send(`No user with id: ${userId}`);

  await userModel.findByIdAndDelete(userId);

  res.json({ message: "User deleted successfully" });
});

router.delete("/reservation/:rId", async (req, res) => {
  const { rId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(rId))
    return res.status(404).send(`No reservation with id: ${rId}`);

  await reservationModel.findByIdAndDelete(rId);

  res.json({ message: "User deleted successfully" });
});

module.exports = router;
