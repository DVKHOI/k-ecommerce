import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "../components";

const ResetPassword = () => {
  return (
    <div
      className="py-5 d-flex justify-content-center align-items-center"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <div className="w-25 rounded-3 bg-white p-3">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">Please enter your new password.</p>
        <form action="">
          <CustomInput
            type="password"
            label="Password"
            id="pass"
            placeholder="Password"
          />
          <CustomInput
            type="password"
            label="Confirm Password"
            id="confirm-pass"
            placeholder="Confirm Password"
          />
          <Link
            to="/"
            className="border-0 px-3 py-2 text-white w-100 fw-bold rounded text-center"
            style={{ background: "#ffd333" }}
          >
            Save
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
