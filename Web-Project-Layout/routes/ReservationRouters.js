// 1. Set up database connection (assuming MongoDB with mongoose)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// 2. Define Schema
const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
  name: String,
  email: String,
  date: { type: Date, default: Date.now }
});

// 3. Create Model
const Reservation = mongoose.model('Reservation', ReservationSchema);

// 4. Route handler example in Reservationroutes.js
const express = require('express');
const router = express.Router();

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

module.exports = router;
