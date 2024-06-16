const express = require('express');
const mongoose = require('mongoose');
3
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://karen:karen@cluster0.3swllaq.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true });

const Reservation = mongoose.model('Reservation', {
  firstName: String,
  lastName: String,
  email: String,
  seating: String,
  numSeats: Number
});

app.post('/api/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    const result = await reservation.save();
    res.json(result);
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ message: 'Error creating reservation' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


