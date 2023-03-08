import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-4">
        <div className="container">
          <div className="row align-item-center ">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15 ">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="text-white mb-0">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="address">
                <address className="text-white ">
                  No: To 2a, Que Thuan Commune, Que Son District, Quang Nam
                  Province
                </address>
                <a
                  href="tel:+84999999999"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +84 999 999 999
                </a>
                <a
                  href="mailto:dinhvinhkhoi@gmail.com"
                  className="mt-4 d-block mb-5 text-white"
                >
                  E-Mail: dinhvinhkhoi@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <Link className="text-white">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link className="text-white">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link className="text-white">
                    <BsFacebook className="fs-4" />
                  </Link>
                  <Link className="text-white">
                    <BsInstagram className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link>Privacy Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Shipping Policy</Link>
                <Link>Terms Of Service</Link>
                <Link>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link>About Us</Link>
                <Link>Faq</Link>
                <Link>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link>Laptops</Link>
                <Link>Headphones</Link>
                <Link>Smart Watches</Link>
                <Link>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white mb-0">
              &copy; {new Date().getFullYear()} Powered by Developer DVK
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
