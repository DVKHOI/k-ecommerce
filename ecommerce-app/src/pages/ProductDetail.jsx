import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import {
  BreadCrumb,
  Color,
  CustomInput,
  Meta,
  ProductCard,
} from "../components";
import ReactImageZoom from "react-image-zoom";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);

  const props = {
    width: 400,
    height: 250,
    zoomWidth: 600,
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1230&q=80",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Product Details" />
      <BreadCrumb title="Product Details" />
      <div className="main-product-wrapper py-5 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="image-zoom">
                  <ReactImageZoom {...props} />
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10pack MultiColoured for Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      edit={false}
                      count={5}
                      value={4}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Gfd</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Haves</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>

                  <div className="d-flex gap-10 flex-column  mb-3 mt-2">
                    <h3 className="product-heading">
                      Size :
                      <div className="d-flex flex-wrap gap-15">
                        <div className="badge border-1 bg-white text-dark border-secondary">
                          S
                        </div>
                        <div className="badge border-1 bg-white text-dark border-secondary">
                          M
                        </div>
                        <div className="badge border-1 bg-white text-dark border-secondary">
                          XL
                        </div>
                        <div className="badge border-1 bg-white text-dark border-secondary">
                          XXL
                        </div>
                      </div>
                    </h3>
                  </div>
                  <div className="d-flex gap-10 flex-column  mb-3 mt-2">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>

                  <div className="d-flex align-items-center gap-15 flex-row  mb-3 mt-2">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        step={{ width: "70px" }}
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0">Add to Cart</button>
                      <button className="button signup">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <Link to="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to compare
                      </Link>
                    </div>
                    <div>
                      <Link to="">
                        <TbGitCompare className="fs-5 me-2" /> Add to wishlist
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping & Returns</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />{" "}
                      We ship all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>

                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link</h3>
                    <Link
                      to=""
                      onClick={() =>
                        copyToClipboard(
                          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                        )
                      }
                    >
                      Copy Product Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <h4 className="section-heading">Description</h4>
                <div className="desc bg-white p-4 rounded">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus, minus neque placeat adipisci illo itaque iusto a
                  dolore maxime temporibus ex inventore nobis rem fuga sint
                  corporis totam recusandae hic!
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="review-head d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2 section-heading">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  <div>
                    <p
                      className="write "
                      onClick={() => setShowWriteReview(!showWriteReview)}
                    >
                      Write a Review
                    </p>
                  </div>
                </div>
                <div className="review-form">
                  {showWriteReview && (
                    <div className="my-3">
                      <h5 className="write-title">Write A Review</h5>
                      <form action="">
                        <div className="input-form mb-3">
                          <label htmlFor="name">Name</label>
                          <CustomInput
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="input-form mb-3">
                          <label htmlFor="email">Email</label>
                          <CustomInput
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="rating mb-1">
                          <ReactStars
                            count={5}
                            size={24}
                            value={0}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div className="input-form mb-3">
                          <label htmlFor="title">Review Title</label>
                          <CustomInput
                            type="text"
                            name="title"
                            placeholder="Enter your title"
                          />
                        </div>
                        <div className="input-form mb-3">
                          <label htmlFor="body">Body of Review (1500)</label>

                          <textarea
                            name="body"
                            className="w-100 form-control"
                            id="body"
                            cols="30"
                            rows="4"
                            placeholder="Write your comments here"
                          ></textarea>
                        </div>
                      </form>
                      <div className="d-flex justify-content-end">
                        <div className="button d-inline-block ">
                          Submit Review
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="reviews my-3">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10 ">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati, ex sint reprehenderit nam laborum dolores
                      assumenda numquam quibusdam et ipsam tenetur consequuntur
                      nulla veritatis neque autem quae repellat impedit
                      distinctio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">You May Also Like</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
