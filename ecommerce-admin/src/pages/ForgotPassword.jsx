import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "../components";

const ForgotPassword = () => {
  return (
    <div
      className="py-5 d-flex justify-content-center align-items-center"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <div className="w-25 rounded-3 bg-white p-3">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">
          Please enter your register email to get reset password.
        </p>
        <form action="">
          <CustomInput
            type="email"
            label="Email"
            id="email"
            placeholder="Email"
          />
          <Link
            to="/"
            className="border-0 px-3 py-2 text-white w-100 fw-bold rounded text-center"
            style={{ background: "#ffd333" }}
          >
            Send
          </Link>
          <Link to="/" className="mt-2 text-black">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
