import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  domain: process.env.DOMAIN,
  MONGO_URL: process.env.MONGO_URL,
  jwt_secret_phrase: process.env.JWT_SECRET_PHRASE,
};
