import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner  position-relative">
                <img
                  src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button mt-3">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap align-items-center gap-10">
                <div className="small-banner pb-2 position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sake</h4>
                    <h5>Head Phone Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner pb-2 position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival.</h4>
                    <h5>Macbook Pro M1.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner pb-2 position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival.</h4>
                    <h5>Apple Watch.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner pb-2 position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="col-12">
            <div className="services flex">
              <div className="service-item">
                <img src="images/service.png" alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="service-item">
                <img src="images/service-02.png" alt="service" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 25% off</p>
                </div>
              </div>
              <div className="service-item">
                <img src="images/service-03.png" alt="service" />
                <div>
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                </div>
              </div>
              <div className="service-item">
                <img src="images/service-04.png" alt="service" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p>Get Factory direct price</p>
                </div>
              </div>
              <div className="service-item">
                <img src="images/service-05.png" alt="service" />
                <div>
                  <h6>Secure Payments</h6>
                  <p>100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container">
          <div className="col-12">
            <div className="categories flex flex-wrap ">
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="laptop" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="watch" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Head Phone</h6>
                  <p>09 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="category item" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="category-item gap-30 flex-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="watch" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
