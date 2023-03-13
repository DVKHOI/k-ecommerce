import React from "react";
import { BreadCrumb, Meta } from "../components";

const About = () => {
  return (
    <>
      <Meta title="About Us" />
      <BreadCrumb title="About Us" />
      <div class1="policy-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h2 className="text-center text-black">
                  This is a About Us pages
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
