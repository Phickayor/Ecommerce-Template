require("dotenv").config();

export const envs = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  ACCESS_KEY:process.env.ACCESS_TOKEN_SECRET_KEY
};
