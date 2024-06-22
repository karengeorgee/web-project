import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
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
    NumberOfSeats: {
      type: Number,
      required: true,
      min: 1,
    },
    seatingPlace: {
      type: String,
      required: true,
      enum: ["Outdoor", "Indoor"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Accepted", "Rejected", "Done"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
