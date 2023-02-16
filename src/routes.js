import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetails from "./Pages/PortfolioDetails";
import Services from "./Pages/Services";
import ServicesDetails from "./Pages/ServicesDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about_us" exact element={<AboutUs />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/services/:serviceName" exact element={<ServicesDetails />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/portfolio/:portfolioName" exact element={<PortfolioDetails />} />
        <Route path="/contact_us" exact element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
