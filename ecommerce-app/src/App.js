import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { About, Contact, Home, OurStore } from "./pages";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-store" element={<OurStore />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
