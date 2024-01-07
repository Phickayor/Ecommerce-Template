import React from "react";
import Login from "../../components/Login";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Verification from "@/app/components/Verification";

const Auth = () => {
  return (
    <div >
      <NavBar />
      <div className="py-5">
        <Verification/>
      </div>
      <Footer/>
    </div>
  );
};

export default Auth;
