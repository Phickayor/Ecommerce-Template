"use client";
import { baseurl } from "@/config/host";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { BiError, BiErrorCircle } from "react-icons/bi";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [mismatchError, setMismatchError] = useState<string | null>(null);

  const HandlePassword = (e: any) => {
    const enteredPassword = e.target.value;
    setConfirmPassword(enteredPassword);
    if (password !== enteredPassword) {
      setMismatchError("Password does not match");
    } else {
      setMismatchError(null);
    }
  };

  const HandleRegistration = async (e: any) => {
    setMismatchError(null);
    e.preventDefault();
    if (password === ConfirmPassword) {
      const res = await fetch(`${baseurl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, email, password })
      });
      const data = await res.json();
    } else {
      setMismatchError("Password does not Match");
    }
  };
  return (
    <div className="p-5 mx-auto grid lg:grid-cols-2 gap-8 w-10/12">
      <div className="w-full hidden lg:block">
        <img src="/images/signup.png" alt="" className="w-full" />
      </div>
      <form
        className="space-y-4 w-full self-center"
        onSubmit={HandleRegistration}
      >
        <h1 className="text-3xl font-semibold">Create an account today ✨</h1>

        {mismatchError && (
          <div className="flex gap-2 mx-auto w-fit text-red-500 text-lg ">
            <BiErrorCircle className="self-center" />
            <span className="self-center">{mismatchError}</span>
          </div>
        )}
        <div className="bg-white flex rounded-lg border-2 group">
          <FaUser className="text-purple-400 self-center mx-5" />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="py-3 focus:outline-none rounded-lg w-full"
            placeholder="Username"
            required
          />
        </div>
        <div className="bg-white flex rounded-lg border-2 group">
          <FaEnvelope className="text-purple-400 self-center mx-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 focus:outline-none rounded-lg w-full"
            placeholder="Email"
            required
          />
        </div>
        <div className="bg-white  flex rounded-lg border-2 ">
          <FaLock className="text-purple-400 self-center mx-5" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 focus:outline-none rounded-lg w-full"
            placeholder="Password"
            required
          />
        </div>
        <div className="bg-white  flex rounded-lg border-2 ">
          <FaLock className="text-purple-400 self-center mx-5" />
          <input
            type="password"
            value={ConfirmPassword}
            onChange={HandlePassword}
            className="py-3 focus:outline-none rounded-lg w-full"
            placeholder="Repeat Password"
            required
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="rounded-lg text-center bg-purple-500 text-white mx-auto w-10/12 self-center p-2 font-semibold text-lg "
          >
            Register
          </button>
        </div>
        <div className=" text-center">
          <p className="text-md inline">Already have an account?</p>
          <Link
            href="/auth/"
            className="cursor-pointer  text-purple-600 font-semibold"
          >
            &nbsp; Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
