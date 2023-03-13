import React from "react";
import { BreadCrumb, Meta } from "../components";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <div class1="policy-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h2 className="text-center text-black">
                  This is a Privacy Policy pages
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
