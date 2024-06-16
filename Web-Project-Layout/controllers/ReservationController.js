
// reservationController.js
const Reservation = require('../models/ReservationModel');

const showReservationPage = (req, res) => {
  res.render("Reservation", {
    currentPage: "Reservation",
    user: req.session.user === undefined ? "" : req.session.user,
  });
};

const createReservation = async (req, res) => {
  const { fn, ln, em, sn, table } = req.body;
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
  if (!table || !['Outdoor', 'Indoor'].includes(table)) {
    return res.status(400).send("Invalid seating preference. Please select 'Outdoor' or 'Indoor'.");
  }

  try {
    // Create and save the new reservation
    const newReservation = new Reservation({
      firstName: fn,
      lastName: ln,
      email: em,
      seatNumber: sn,
      preferredSeating: table
    });

    await newReservation.save();

    // If no error, redirect to confirmation page
    res.redirect("/reservation/confirmation");
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).send("An error occurred while creating the reservation. Please try again later.");
  }
};

const showConfirmationPage = (req, res) => {
  res.render("confirmation", {
    currentPage: "confirmation",
    user: req.session.user === undefined ? "" : req.session.user,
  });
};

module.exports = {
  showReservationPage,
  createReservation,
  showConfirmationPage
};

