import React from "react";
import { BreadCrumb, CustomInput, Meta } from "../components";

const SignUp = () => {
  return (
    <>
      <Meta title="Signup" />
      <BreadCrumb title="Signup" />
      <div className="login-wrapper  bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" name="name" placeholder="Name" />
                  <CustomInput type="email" name="email" placeholder="Email" />
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />

                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15  align-items-center">
                      <button className="button border-0" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
