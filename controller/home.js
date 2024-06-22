import secrets from "../config/secrets.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
const { jwt_secret_phrase } = secrets;

const index_get = async (req, res) => {
  res.render("home/index");
};

const reservation_get = async (req, res) => {
  const token = req.cookies.jwt;

  const date = req.query.date;
  const time = req.query.time;

  if (token) {
    jwt.verify(token, jwt_secret_phrase, async (err, decodedToken) => {
      if (decodedToken.user.role)
        res.render("home/reservation", {
          user: await User.findById(decodedToken.user._id),
          date: date,
          time: time,
        });
      else res.redirect(`/signin`);
    });
  } else res.redirect(`/signin`);
};

const mapMenu_get = async (req, res) => {
  res.render("home/mapMenu");
};

const myCoupons_get = async (req, res) => {
  res.render("home/myCoupons");
};

export default {
  index_get,
  reservation_get,
  mapMenu_get,
  myCoupons_get,
};
