"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, SetEmail] = useState<string | undefined>();
  const [password, SetPassword] = useState<string | undefined>();

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Alert submit handled");
  };

  return (
    <div className="p-5 mx-auto grid lg:grid-cols-2 gap-8 w-10/12">
      <div className="w-full hidden lg:block">
        <img src="/images/auth.png" alt="" className="w-full" />
      </div>
      <form className="space-y-4 w-full self-center">
        <h1 className="text-3xl font-semibold">Welcome back 👋</h1>
        <div className="bg-white flex rounded-lg border-2 group">
          <FaEnvelope className="text-purple-400 self-center mx-5" />
          <input
            type="text"
            value={email}
            className="py-3 focus:outline-none rounded-lg w-full"
            placeholder="Email"
          />
        </div>
        <div className="bg-white  flex rounded-lg border-2 ">
          <FaLock className="text-purple-400 self-center mx-5" />
          <input
            type="text"
            className="py-3 focus:outline-none rounded-lg w-full"
            placeholder="Password"
          />
        </div>
        <div className="flex w-full font-semibold">
          <div className="w-8/12">
            <input type="checkbox" className="bg-purple-600" />
            <label className=" text-slate-700">&nbsp; Remember me</label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="inline-block w-4/12 text-center text-purple-600"
          >
            Forgot password?
          </Link>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="rounded-lg text-center bg-purple-500 text-white mx-auto w-10/12 self-center p-2 font-semibold text-lg "
          >
            Login
          </button>
        </div>
        <div className=" text-center">
          <p className="text-md inline">Don&apos;t have an account?</p>
          <Link
            href="/auth/register"
            className="cursor-pointer  text-purple-600 font-semibold"
          >
            &nbsp; Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
