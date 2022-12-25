import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/AboutUs/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioDetailPage from "./Pages/PortfolioDetailPage/PortfolioDetailPage";
import Services from "./Pages/Services/Services";

function routes() {
  return (
    <Routes>
      {/* home page routes */}
      <Route path="/" element={<Home />} />

      {/* services page routes */}
      <Route path="/services" exact element={<Services />} />
      <Route path="/services/:service" exact element={<Services />} />

      {/* portfolio page routes */}
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route
        path="/portfolio/details"
        exact
        element={<PortfolioDetailPage />}
      />

      {/* about page  */}
      <Route path="/about-us" exact element={<About />} />

      {/* contact us page */}
      <Route path="/conact-us" exact element={<ContactUs />} />

      {/* default redirect page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default routes;
