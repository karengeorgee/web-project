const path = require('path');
const Reservation = require('../models/reservationModel'); // Correctly import the reservation model

exports.getUserDashboard = async(req, res) => {
  const userId = req.session.user._id; // Use session data to filter reservations         //veryimportant
  const reservations = await Reservation.find({ user: userId }); // Use correct field for filtering
  res.render('userdash', {
    username: req.session.username || 'Guest',
    reservations:reservations
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
