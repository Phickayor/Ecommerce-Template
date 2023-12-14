import React from "react";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Auth = () => {
  return (
    <div >
      <NavBar />
      <div className="py-5">
        <Login />
      </div>
      <Footer/>
    </div>
  );
};

export default Auth;
