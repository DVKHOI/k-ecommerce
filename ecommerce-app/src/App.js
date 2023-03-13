import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import {
  About,
  Blog,
  BlogDetail,
  Cart,
  Checkout,
  CompareProductPage,
  Contact,
  ForgotPassword,
  Home,
  Login,
  OurStore,
  PrivacyPolicy,
  ProductDetail,
  RefundPolicy,
  ResetPassword,
  ShippingPolicy,
  SignUp,
  TermAndConditions,
  WishlistPage,
} from "./pages";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/store" element={<OurStore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/compare" element={<CompareProductPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/term" element={<TermAndConditions />} />
          <Route path="/product-detail/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check-out" element={<Checkout />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
