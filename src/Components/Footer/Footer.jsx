import React from "react";
import "./footer.scss";

const Footer = () => (
  <div className="ak__footer section__padding">
    <div className="ak__footer-container">
      <div className="ak__footer-heading">
        <h1 className="gradient__text">Let's Work Together</h1>
      </div>

      <div className="ak__footer-btn">
        <p>Special Offer</p>
      </div>

      <div className="ak__footer-links">
        <div className="ak__footer-links_logo">
          <img src="/images/svgs/ak_logo.svg" alt="ak_logo" />
          <p>Give Your Dreams A Shape Of Reality.</p>
        </div>
        <div className="ak__footer-links_div">
          <h4>Architectural Services</h4>
          <p>Floor Plan</p>
          <p>3D Exterior Design</p>
          <p>Interior Design</p>
          <p>Vastu Consultation</p>
          <p>3D Floor Plans</p>
          <p>Commercial Interiors</p>
        </div>
        <div className="ak__footer-links_div">
          <h4>Other Services</h4>
          <p>Site Supervision Services</p>
          <p>Fabrication Services</p>
          <p>Kitchen Services</p>
          <p>Wallpaper Services</p>
          <p>Furniture Services</p>
          <p>Gardening Services</p>
        </div>
        <div className="ak__footer-links_div">
          <h4>Get in touch</h4>
          <p>
            AK Architect's,
            <br /> <br />
            128, Madhuban Colony, Behind Reliance Pertol Pump, AB Road, Dewas -
            455001
          </p>
          <p>+91 8085997612</p>
          <p>info@akarchitect.com</p>
        </div>
      </div>

      <div className="ak__footer-copyright">
        <p>@{new Date().getFullYear()} AK ARCHITECT'S. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
