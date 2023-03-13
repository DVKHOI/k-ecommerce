import React from "react";
import { BreadCrumb, Meta, Wishlist } from "../components";

const WishlistPage = () => {
  return (
    <>
      <Meta title="WishList" />
      <BreadCrumb title="WishList" />
      <div className="wishlist-wrapper py-5 bg-gray">
        <div className="container">
          <div className="row">
            <Wishlist />
            <Wishlist />
            <Wishlist />
            <Wishlist />
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
