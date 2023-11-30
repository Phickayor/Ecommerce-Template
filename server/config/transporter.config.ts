import { envs } from "./envs";
import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  // host: "sandbox.smtp.mailtrap.io",
  // port: 2525,
  auth: {
    user: envs?.MAIL_USER,
    pass: envs?.MAIL_PASS
  }
});
export { transporter };
