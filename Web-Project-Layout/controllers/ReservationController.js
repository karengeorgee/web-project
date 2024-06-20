const Reservation = require('../models/reservationModel');

const showReservationPage = (req, res) => {
  const { date, time } = req.query;
  res.render("Reservation", {
    currentPage: "Reservation",
    user: req.session.user === undefined ? "" : req.session.user,
    date: date || '',
    time: time || ''
  });
};

const createReservation = async (req, res) => {
  const { fn, ln, em, sn, table, date, time,userid } = req.body;         //zwdna henna el userid
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
  if (!date) {
    return res.status(400).send("Invalid date. Please select a valid date.");
  }
  if (!time) {
    return res.status(400).send("Invalid time. Please select a valid time.");
  }

  try {
    // Create and save the new reservation
    const newReservation = new Reservation({
      firstName: fn,
      lastName: ln,
      email: em,
      seatNumber: sn,
      preferredSeating: table,
      reservationDate: date,
      reservationTime: time,
      user:userid                        //zwdna henna user:userid
    });

    await newReservation.save();

    // If no error, redirect to confirmation page with reservation details
    res.redirect(`/reservation/confirmation?date=${date}&time=${time}&guests=${sn}`);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).send("An error occurred while creating the reservation. Please try again later.");
  }
};

const showConfirmationPage = (req, res) => {
  const { date, time, guests } = req.query;

  res.render("confirmation", {
    currentPage: "confirmation",
    user: req.session.user === undefined ? "" : req.session.user,
    reservationDetails: {
      date,
      time,
      guests
    }
  });
};

module.exports = {
  showReservationPage,
  createReservation,
  showConfirmationPage
};
