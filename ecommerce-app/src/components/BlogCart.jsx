import React from "react";
import { Link } from "react-router-dom";

const BlogCart = () => {
  return (
    <div className="col-3">
      <Link to="/">
        <div className="blog-cart ">
          <div className="cart-img">
            <img src="images/blog-1.jpg" className="img-fluid" alt="" />
          </div>
          <div className="blog-content">
            <p className="date">09 March, 2023</p>
            <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              dolorem adipisci. Voluptas dolor possimus rem, numquam qui magni a
              placeat laudantium temporibus beatae? Quis magnam molestiae rem
              modi magni rerum.
            </p>
            <Link to="/" className="button">
              Read more
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCart;
