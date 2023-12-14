import React from "react";
import NavBar from "../../components/NavBar";
import SignUp from "../../components/Signup";
import Footer from "@/app/components/Footer";

const Register = () => {
  return (
    <div>
      <NavBar />
      <div className="py-10">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
