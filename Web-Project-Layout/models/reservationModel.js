const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
  },
  lastName: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/,
  },
  email: {
    type: String,
    required: true,
    match: /^[\w.-]+@[\w-]+\.[\w]{2,4}$/,
  },
  seatNumber: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;