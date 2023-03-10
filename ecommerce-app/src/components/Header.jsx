import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <Fragment>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                {" "}
                Free Shipping Over $100 & Free Returns
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
              <div className="input-group ">
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
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p>
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="user" />
                    <p>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white  text-dark">0</span>
                      <p>$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3 sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-10 align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/menu.svg" alt="" />
                      <span>Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu py-0"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links d-flex gap-15 ">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/store">Our Store</NavLink>
                  <NavLink to="/blog">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
