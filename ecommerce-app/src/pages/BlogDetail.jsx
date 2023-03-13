import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb, Meta } from "../components";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
const BlogDetail = () => {
  return (
    <>
      <Meta title="Blog Details" />
      <BreadCrumb title="Blog Details" />
      <div className="blog-detail-wrapper py-5 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="card-item">
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="blog-detail-content">
                <p className="blog-date">09 March, 2023</p>
                <h3 className="blog-title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  alt="blog"
                  className=" img-fluid w-100 my-3"
                />
                <p className="blog-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis soluta dicta veniam voluptatum quae, quidem voluptatem
                  pariatur laudantium culpa sint vero veritatis commodi minus
                  eligendi eaque molestias illo numquam et.
                </p>
                <Link
                  to="/blog"
                  className="blog-link d-flex align-items-center gap-1"
                >
                  <HiOutlineArrowNarrowLeft className="d-inline-block fs-5 " />{" "}
                  Go back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
