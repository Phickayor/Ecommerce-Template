import express from "express";
import {
  logUserIn,
  registerUser,
  sendOtp
} from "../controllers/auth.controller";

const authRouter = express();

authRouter.post("/register", registerUser);
authRouter.post("/login", logUserIn);
authRouter.post("/send-otp", sendOtp);

export { authRouter };
