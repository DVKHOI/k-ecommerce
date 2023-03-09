import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-star-rating-component";
import prodCompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addCart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCart = () => {
  return (
    <div className="col-2">
      <Link to="" className="product-cart position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-img">
          <img src={watch} className="img-fluid" alt="" />
          <img src={watch2} className="img-fluid" alt="" />
        </div>
        <div className="product-details">
          <p className="brand">Havels</p>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars count={5} value={3} size={24} activeColor="#ffd700" />
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
      </Link>
    </div>
  );
};

export default ProductCart;
