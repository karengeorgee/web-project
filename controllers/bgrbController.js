// controllers/bgrbController.js

const user = require("../models/userModel.js");
const reservation = require("../models/reservationModel.js");
const item = require("../models/itemsModel.js");

module.exports = {
  getBgrbPage: async (req, res) => {
    console.log("Controller: Rendering bgrb page");

    // Sample data to render
    const content = {
      message: "Welcome to the bgrb page!",
      users: await user.find(),
      reservations: await reservation.find(),
      items: await item.find(),
    };

    res.render("bgrb", {
      content,
    });
  },
};
