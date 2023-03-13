import React, { useState } from "react";

const Wishlist = () => {
  const [block, setBlock] = useState(false);
  return (
    <div className={`${!block ? "col-3 mb-3" : "d-none"}`}>
      <div className="wishlist-card position-relative">
        <img
          src="images/cross.svg"
          alt="cross"
          className="position-absolute cross"
          onClick={() => setBlock(true)}
        />
        <div className="product-card-image">
          <img src="images/watch.jpg" alt="watch" className="card-image" />
        </div>
        <div className="compare-product-details">
          <h5 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quisquam facere.
          </h5>
          <h6 className="price">$ 100.00</h6>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
