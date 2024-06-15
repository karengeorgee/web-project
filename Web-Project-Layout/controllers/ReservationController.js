// reservationController.js
const reservationService = require("../services/reservationService");
// Function to render the reservation page
const showReservationPage = (req, res) => {
    res.render("Reservation", {
      currentPage: "Reservation",
      user: req.session.user === undefined ? "" : req.session.user,
    });
  };
  
  // Function to create a new reservation
  const createReservation = (req, res) => {
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
  
    // Assuming you have a reservation service or model to handle reservation creation
    reservationService.createReservation({ fn, ln, em, sn }, (err, newReservation) => {
      if (err) {
        return res.status(500).send("Error creating reservation");
      }
      res.redirect("/reservation/confirmation");
    });
  };
  
  // Function to show reservation confirmation page
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
  