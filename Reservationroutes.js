// reservationRoutes.js
const express = require("express");
const router = express.Router();

// Controller logic to handle reservation creation
router.get("/", (req, res) => {
  res.render("Reservation", {
    currentPage: "Reservation",
    user: req.session.user === undefined ? "" : req.session.user,
  });
});

router.post("/create", (req, res) => {
  const { fn, ln, em, sn } = req.body;
  const lettersOnly = /^[A-Za-z]+$/;

  // Server-side validation
  if (!fn || !fn.match(lettersOnly)) {
    return res.status(400).send("Invalid first name. Please enter a valid first name with letters only.");
  }
  if (!ln || !ln.match(lettersOnly)) {
    return res.status(400).send("Invalid last name. Please enter a valid last name with letters only.");
  }
  if (!em) {
    return res.status(400).send("Invalid email. Please enter a valid email.");
  }
  if (!sn || sn <= 0) {
    return res.status(400).send("Invalid seat number. Please enter a valid number of seats.");
  }

  // Simulate reservation creation logic
  const newReservation = { id: 1, fn, ln, em, sn };

  // If no error, redirect to confirmation page
  res.redirect("/reservation/confirmation");
});

router.get("/confirmation", (req, res) => {
  res.render("confirmation", {
    currentPage: "confirmation",
    user: req.session.user === undefined ? "" : req.session.user,
  });
});

module.exports = router;
