// Import your routes here...
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const indexRoutes = require("./indexRoutes");
const Reservationroutes=require("./Reservationroutes");
const sjakRoutes = require("./SJAKroutes"); // Import the SJAK route file
const mapMenuRoutes = require("./mapmenuroutes"); // Import the map menu route file
const menuRoutes = require("./menuroute"); // Import menu route file
const bgrbRoutes = require('./bgrbRoutes');
const userDRoutes = require('./userDRoutes');



function setupRoutes(app) {
  // Initialize your routes here...
 // app.use("/SJAK", indexRoutes);
 app.use("/", sjakRoutes); // '/' for root navigation to reservation page
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/Reservation",Reservationroutes);
  app.use("/mapmenu", mapMenuRoutes); // Add the map menu routes
  app.use("/menu", menuRoutes); // Setup menu route
  app.use("/bgrb", bgrbRoutes); // Setup  route
  app.use("/userdash", userDRoutes); // Setup  route

  


  // Catch-all route for handling 404 errors
  app.use((req, res, next) => {
    res.render("404", {
      currentPage: "404",
      user: req.session.user === undefined ? "" : req.session.user,
    });
  });
}


module.exports = { setupRoutes };
