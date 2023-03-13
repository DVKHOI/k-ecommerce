import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb, Meta, ProductCart } from "../components";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper py-5 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cart-header">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <ProductCart />
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/store" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $ 1000</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/check-out" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
