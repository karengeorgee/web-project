import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[A-Za-z\s]+$/,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["Appetizer", "Main Course", "Dessert", "Beverage"],
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

export default MenuItem;
