import userModel from "../models/user.js";
import jwt from "jsonwebtoken";
import secrets from "../config/secrets.js";

const signin_get = async (req, res) => {
  res.render("home/signin");
};

const signin_post = async (req, res) => {
  const { username, password } = req.body;
  const {jwt_secret_phrase} = secrets;

  try {
    const founduser = await userModel.findOne({ username });

    if (!founduser || !founduser.comparePassword(password, founduser.password))
      return res.status(401).json({ errMsg: "Wrong username or password" });

    const token = jwt.sign({ user: founduser }, jwt_secret_phrase, {
      expiresIn: 3 * 24 * 60 * 60, //3 days
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
    });

    res.status(200).json({ user: founduser });
  } catch (err) {
    console.log(err)
    res.status(500).json({ errMsg: err });
  }
};

const signup_get = async (req, res) => {
  res.render("home/signup");
};

const signup_post = async (req, res) => {
  let newUser;
  try {
    const { username, password } = req.body;

    if (await userModel.findOne({ username }))
      return res.status(409).json({ errMsg: "Username is Taken" });

    newUser = new userModel({
      username,
      password,
    }).save();
  } catch (err) {
    return res.status(409).json({ errMsg: err });
  }
  return res.status(201).json({ user: newUser });
};

export default { signin_get, signin_post, signup_get, signup_post };
