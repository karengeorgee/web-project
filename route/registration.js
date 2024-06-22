import express from "express";
import registration from "../controller/registration.js";

const router = express.Router();

router.get("/signin", registration.signin_get);
router.post("/signin", registration.signin_post);

router.get("/signup", registration.signup_get);
router.post("/signup", registration.signup_post);

router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
});

export default router;
