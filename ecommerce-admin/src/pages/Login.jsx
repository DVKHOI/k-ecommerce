import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput } from "../components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = Yup.object({
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 character")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values, null, 2));
    },
  });
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  console.log(user);
  useEffect(() => {
    if (user !== null) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isLoading, isError, isSuccess, message, navigate]);

  return (
    <div
      className="py-5 d-flex justify-content-center align-items-center"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <div className="w-25 rounded-3 bg-white p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <div className="error text-center">
          {message.message === "Rejected" ? "You are not an admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="email"
            label="Email"
            id="email"
            placeholder="Email"
            val={formik.values.email}
            onCh={formik.handleChange("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            label="Password"
            id="pass"
            placeholder="Password"
            val={formik.values.password}
            onCh={formik.handleChange("password")}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="text-end">
            <Link to="/forgot-password" className="mb-2">
              Forgot Password
            </Link>
          </div>
          <button
            type="submit"
            className="border-0 px-3 py-2 text-white w-100 fw-bold rounded text-center"
            style={{ background: "#ffd333" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
