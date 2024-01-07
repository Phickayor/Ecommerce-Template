"use client";
import React, { useRef, useState } from "react";

function ForgotPassword() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [otpStyling, setOtpStyling] = useState("w-0 h-0");
  const [EmailStyling, setEmailStyling] = useState("w-full h-fit");
  const inputRefs = useRef<any>([]);
  const handleInputChange = (index: number, event: any) => {
    let value = event.target.value;

    // Ensure the input is a single digit
    value = value.replace(/\D/g, "");

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);

    // Move to the next input
    if (value && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <div className="flex flex-col gap-8 p-6 bg-slate-200 shadow-xl w-96 rounded-lg">
      <h1 className="text-xl font-semibold">Forgot Password</h1>
      <div className="flex">
        <div className={`${EmailStyling} overflow-hidden gap-6 flex flex-col duration-300`}>
          <label className="text-center font-medium text-lg">Your Email</label>
          <input
            type="text"
            autoFocus
            placeholder="johndoe@gmail.com"
            className="border-2 focus:outline-none focus:border-purple-500 bg-inherit border-slate-600 self-center px-5 py-1 rounded-md"
          />

          <button
            onClick={() => {
              setOtpStyling("w-full h-fit");
              setEmailStyling("w-0 h-0");
            }}
            className="bg-purple-500 text-white rounded-lg py-2 self-end px-10 "
          >
            Next
          </button>
        </div>

        <div className={`${otpStyling} overflow-hidden gap-6 flex flex-col duration-500`}>
          <div className="flex flex-col gap-3 text-center ">
            <label className="font-medium text-lg">Input OTP</label>
            <p className="text-sm">
              A 4 digit pin has been sent to has been sent to{" "}
              <b className="text-blue-500">jetawof@gmail.com</b>
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 mx-auto w-10/12 ">
            {otpValues.map((value: any, index: number) => (
              <input
                key={index}
                ref={(input) => (inputRefs.current[index] = input)}
                type="text"
                required
                value={value}
                onChange={(event) => handleInputChange(index, event)}
                className="border-2 py-4 rounded-xl text-center focus:outline-none"
                maxLength={1}
              />
            ))}
          </div>

          <button className="bg-purple-500 text-white rounded-lg py-2 self-center px-10 ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
