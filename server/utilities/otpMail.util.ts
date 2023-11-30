import { transporter } from "../config/transporter.config";

const SendVerificationMail = async (
  otp: number,
  receiversMail: string,
  res: any
) => {
  try {
    const mailOptions = {
      from: `Ecommerce Site<"webcraft570@gmail.com">`,
      to: receiversMail,
      subject: `${"Email Verification"}`,
      html: `Hello there,</b> <br/><br/> This is your OTP to Verify your email on <b>Beta Finance</b>: ${otp}.<br/><br/> <i>PS: OTP expires in 5 minutes time.</i> <br/><br/><b> Thanks, from Beta Finance Team</b> `
    };

    const result = transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.log(err);
        console.log(err.message);
        res?.status(400).json({ message: err.message });
      } else {
        res?.status(200).json({ message: info.response });
        console.log(info.response);
      }
    });

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { SendVerificationMail };
