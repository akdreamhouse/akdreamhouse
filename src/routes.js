import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/AboutUs/About";
import BlogPage from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" exact element={<About />} />
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route path="/services" exact element={<Services />} />
      <Route path="/conact-us" exact element={<ContactUs />} />
      <Route path="/blog" exact element={<BlogPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default routes;
