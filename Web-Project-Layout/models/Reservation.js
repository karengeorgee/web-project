// routes/ReservationRoutes.js
const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// POST /api/reservation - Create a new reservation
router.post('/reservation', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Create a new reservation document
    const newReservation = new Reservation({
      name,
      email
    });

    // Save reservation to database
    await newReservation.save();

    res.status(201).json({ message: 'Reservation saved successfully' });
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(500).json({ error: 'Failed to save reservation' });
  }
});

// GET /api/reservation - Retrieve all reservations
router.get('/reservation', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ error: 'Failed to fetch reservations' });
  }
});

module.exports = router;
