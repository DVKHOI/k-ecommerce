import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-4 bg-white ">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <p className="text-center">
              <Link to="/" className="text-dark">
                Home
              </Link>{" "}
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
