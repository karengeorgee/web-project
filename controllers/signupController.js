const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const registrationProcess = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    console.log("Received registration data:", { username, password, confirmPassword });

    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      return res.render("signup", {
        currentPage: "signup",
        error: "Passwords do not match.",
        user: null,
      });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log("Username already exists:", username);
      return res.render("signup", {
        currentPage: "signup",
        error: "Username already exists.",
        user: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password generated:", hashedPassword);

    const newUser = new User({
      username,
      password: hashedPassword,
      // Handle image upload if necessary
    });

    await newUser.save();
    console.log("New user saved:", newUser);

    req.session.user = newUser;
    console.log("User session set:", req.session.user);

    res.redirect("/");
  } catch (error) {
    console.error("Error during registration process:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  registrationProcess,
};
