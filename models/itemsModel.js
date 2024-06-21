const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    match: /^[A-Za-z\s]+$/, // Allowing letters and spaces
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Minimum price should be 0
  },
  category: {
    type: String,
    required: true,
    enum: ["Appetizer", "Main Course", "Dessert", "Beverage"], // Specify the allowed values
  },
  availability: {
    type: Boolean,
    required: true,
    default: true, // Default value is true (available)
  },
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

module.exports = MenuItem;
