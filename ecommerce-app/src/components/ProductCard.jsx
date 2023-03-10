import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import prodCompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addCart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCart = ({ grid }) => {
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname === "/our-store" ? `gr-${grid}` : "col-3"
      }`}
    >
      <div className="product-cart position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="/">
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-img">
          <img src={watch} className="img-fluid" alt="" />
          <img src={watch2} className="img-fluid" alt="" />
        </div>
        <div className={`product-details ${grid === 12 ? "me-5" : ""}`}>
          <p className="brand">Havels</p>
          <Link to="/" className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </Link>
          <p className={`desc ${grid === 12 ? "" : "d-none"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            explicabo fugiat quis reiciendis aliquid sed reprehenderit quae sunt
            maxime. Fugit excepturi odit vitae minima veniam impedit et eum
            alias neque.
          </p>
          <ReactStars
            count={5}
            value={3}
            size={24}
            edit={"true"}
            activeColor="#ffd700"
          />
          <p className="product-price">$100.00</p>
        </div>
        <div className="actions-bar position-absolute">
          <div className="action-item d-flex flex-column gap-2">
            <Link to="/">
              <img src={prodCompare} alt="compare" />
            </Link>
            <Link to="/">
              <img src={addCart} alt="add cart" />
            </Link>
            <Link to="/">
              <img src={view} alt="view" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
