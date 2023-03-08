import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <Fragment>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Miễn phí giao hàng và hoàn trả cho đơn hàng trên 2.000.000
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+84 999 999 999">
                  +84 999 999 999
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1>
                <Link className="text-white">Dev K.</Link>
              </h1>
            </div>
            <div className="col-5">
              <div class="input-group ">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search product Here"
                  aria-label="Search product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
