// user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  // Add more fields as needed
  // Add more fields as needed
  
}) 
const userModel=mongoose.model("users",userSchema)


module.exports = User;
