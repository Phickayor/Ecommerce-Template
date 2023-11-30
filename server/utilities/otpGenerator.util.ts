const generateOtp = (length: number) => {
  var otp = [];
  for (var i = 0; i < length; i++) {
    otp.push(Math.floor(Math.random() * 9));
  }
  var otpString = otp.join("");
  return otpString;
};

export { generateOtp };
