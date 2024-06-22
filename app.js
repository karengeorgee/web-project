import express from "express";
import cookieParser from "cookie-parser";
import secrets from "./config/secrets.js";
import connectDB from "./config/db.js";
//Routes
import registrationRouter from "./route/registration.js";
import reservationRouter from "./route/reservation.js";
import adminRouter from "./route/admin.js";
import homeRouter from "./route/home.js";
import menuItemRouter from "./route/menuItem.js";
import userRouter from "./route/user.js";
//middleware
import adminAuth from "./middleware/adminAuth.js";
const app = express();
const port = secrets.port;

app.use(express.static("public")); // to read static files (css ,js ,img)
app.use(express.json()); // to read req.body
app.use(express.urlencoded({ extended: true })); // to read req.body
app.use(cookieParser()); // to read req.cookie
app.set("view engine", "ejs"); // to set view engine to ejs

app.use(homeRouter);
app.use(registrationRouter);
app.use("/menuItem", menuItemRouter);
app.use("/user", userRouter);
app.use("/reservation", reservationRouter);
app.use("/admin", adminAuth, adminRouter);

app.use((req, res, next) => {
  res.status(404).render("home/404");
});

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
