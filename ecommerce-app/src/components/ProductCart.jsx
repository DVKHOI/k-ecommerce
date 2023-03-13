import React, { useState } from "react";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
const ProductCart = () => {
  const [block, setBlock] = useState("");
  const deleteProduct = () => {
    setBlock("d-none");
  };
  return (
    <div
      className={`cart-data py-3 mb-2 d-flex justify-content-between align-items-center ${block}`}
    >
      <div className="cart-col-1 gap-15 d-flex align-items-center">
        <div className="w-25">
          <img src={watch} className="img-fluid" alt="productImage" />
        </div>
        <div className="w-75">
          <p className="cart-product-title">
            Lorem ipsum dolor sit, amen consectetur elite. Incident, rationed.
          </p>
          <p>Size: M</p>
          <p>Color: Red</p>
        </div>
      </div>
      <div className="cart-col-2">
        <h5 className="price">$ 100</h5>
      </div>
      <div className="cart-col-3 d-flex align-items-center gap-15">
        <div>
          <input
            className="form-control"
            type="number"
            name=""
            min={1}
            max={10}
            id=""
          />
        </div>
      </div>
      <div className="cart-col-4 d-flex justify-content-between">
        <h5 className="price">$ 100</h5>
        <div>
          <AiFillDelete
            className="delete-icon"
            onClick={() => deleteProduct()}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
