import React from "react";
import { BreadCrumb, CompareProduct, Meta } from "../components";

const CompareProductPage = () => {
  return (
    <>
      <Meta title="Compare Product" />
      <BreadCrumb title="Compare Product" />
      <div className="compare-product-wrapper py-5 bg-gray">
        <div className="container">
          <div className="row">
            <CompareProduct />
            <CompareProduct />
            <CompareProduct />
            <CompareProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProductPage;
