import React from "react";
import { BlogCart, BreadCrumb, Meta } from "../components";

const Blog = () => {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper py-5 bg-gray">
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
              <div className="row">
                <BlogCart col={6} />
                <BlogCart col={6} />
                <BlogCart col={6} />
                <BlogCart col={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
