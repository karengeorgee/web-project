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
  preferredSeating: {
    type: String,
    required: true,
    enum: ["Outdoor", "Indoor"], // Specify the allowed values
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Done"],
    default: "Pending", // Set default status to "Pending"
  },
});

    // Retrieve all reservations
   
  
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
