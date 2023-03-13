import React, { useState } from "react";
import { Color } from ".";

const CompareProduct = () => {
  const [block, setBlock] = useState(false);
  return (
    <div className={`${!block ? "col-3 mb-3" : "d-none"}`}>
      <div className="compare-product-card position-relative">
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
          <div>
            <div className="product-detail">
              <h5>Brand:</h5>
              <p>Havels</p>
            </div>
            <div className="product-detail">
              <h5>Type:</h5>
              <p>Watch</p>
            </div>
            <div className="product-detail">
              <h5>Availiability:</h5>
              <p>In Stock</p>
            </div>
            <div className="product-detail">
              <h5>Color:</h5>
              <Color />
            </div>
            <div className="product-detail">
              <h5>Size:</h5>
              <div className="d-flex gap-10">
                <p>S</p>
                <p>M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
