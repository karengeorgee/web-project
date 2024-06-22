import mongoose from "mongoose";
import secrets from "./secrets.js";

const MONGO_URL = secrets.MONGO_URL;


mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};

export default connectDB;
