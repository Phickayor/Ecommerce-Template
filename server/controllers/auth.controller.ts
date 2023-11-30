import jwt from "jsonwebtoken";
import userModel from "../models/user.model";
import { decryptPassword, encyrptPassword } from "../utilities/password.util";
import { envs } from "../config/envs";
import { generateOtp } from "../utilities/otpGenerator.util";
import { SendVerificationMail } from "../utilities/otpMail.util";

const registerUser = async (
  req: { body: { email: string; password: string; userName: string } },
  res: any
) => {
  try {
    let { email, password, userName } = req.body;
    let hashedPassword = await encyrptPassword(password);
    await userModel.create({
      email,
      password: hashedPassword,
      userName
    });
    res?.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    res?.status(400).json({ message: `Error: ${error.message}` });
  }
};

const logUserIn = async (
  req: {
    body: { email: string; password: string };
  },
  res: any
) => {
  try {
    let { email, password } = req.body;
    const findUser = await userModel.findOne({ email });
    if (findUser) {
      let comparePassword = await decryptPassword(password, findUser?.password);
      if (comparePassword) {
        if (!findUser?.isEmailVerified) {
          var otp = generateOtp(6);

          res.status(400).json({ message: "Email is not verified", otp });
        } else {
          var token = jwt.sign({ user: findUser }, envs?.ACCESS_KEY, {
            expiresIn: "1d"
          });
          res.status(200).json({ message: "Signed in successfully", token });
        }
      } else {
        res.status(403).json({ message: "Incorrect Password" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: `Error: ${error.message}` });
  }
};

const sendOtp = async (req: { body: { email: string } }, res: any) => {
  try {
    var email = req.body.email;
    var otp = parseInt(generateOtp(6));
    await SendVerificationMail(otp, email, res);
  } catch (error) {
    res.status(400).json({ message: `Error: ${error.message}` });
  }
};

export { registerUser, logUserIn, sendOtp };
