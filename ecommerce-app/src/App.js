import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { About, Blog, Contact, Home, OurStore } from "./pages";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<OurStore />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
