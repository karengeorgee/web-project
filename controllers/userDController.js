const path = require('path');
const Reservation = require('../models/reservationModel'); // Correctly import the reservation model

exports.getUserDashboard = async(req, res) => {
  const userId = req.session.user._id; // Use session data to filter reservations         //veryimportant
  const reservations = await Reservation.find({ user: userId }); // Use correct field for filtering
  res.render('userdash', {
    username: req.session.username || 'Guest',
    reservations:reservations                   //7tena daa kman dee sessions
  });
};

exports.getUserReservations = async (req, res) => {
  try {
    const userId = req.session.user; // Use session data to filter reservations
    const reservations = await Reservation.find({ user: userId }); // Use correct field for filtering
    res.json(reservations); // Send reservations data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getUserBookingHistory = async (req, res) => {
  const userId = req.session.user._id; // Use session data to filter reservations
  try {
    const doneReservations = await Reservation.find({ user: userId, status: 'Done' }); // Query for done reservations

    console.log('Fetched done reservations:', doneReservations); // Debug statement
    console.log(doneReservations); // Debug statement


    res.render('userdash', {
      username: req.session.username || 'Guest',
      doneReservations: doneReservations // Render booking history with done reservations
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

