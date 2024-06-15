// Import your routes here...
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const indexRoutes = require("./indexRoutes");
const Reservationroutes=require("./Reservationroutes");

function setupRoutes(app) {
  // Initialize your routes here...
  app.use("/SJAK", indexRoutes);
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/Reservation",Reservationroutes);
  // Catch-all route for handling 404 errors
  app.use((req, res, next) => {
    res.render("404", {
      currentPage: "404",
      user: req.session.user === undefined ? "" : req.session.user,
    });
  });
}


module.exports = { setupRoutes };
