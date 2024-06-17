
const express = require("express");
const reservationController = require("../controllers/ReservationController");
const router = express.Router();

// Route to display the reservation page
router.get("/", reservationController.showReservationPage);

// Route to create a new reservation
router.post("/create", reservationController.createReservation);

// Route to show reservation confirmation page
router.get("/confirmation", reservationController.showConfirmationPage);

module.exports = router;