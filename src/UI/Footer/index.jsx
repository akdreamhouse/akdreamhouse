import React from "react";
import "./style.scss";

const Footer = () => (
  <div className="ak__footer section__padding">
    <div className="ak__footer-container">
      <div className="ak__footer-heading">
        <h1 className="gradient__text">Let's Work Together</h1>
      </div>

      <div className="ak__footer-container-button-box">
        <button className="btn">
          <div className="text">Special Offer</div>
        </button>
      </div>

      <div className="ak__footer-links">
        <div className="ak__footer-links_logo">
          <h2 className="logo-text">AK Dream House</h2>
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
            AK Dream House,
            <br /> <br />
            128, Amrit Complex, AB Road, Madhya Pradesh, Dewas, India, 455001
          </p>
          <p>+91-8889900387</p>
          <p>info@akdreamhouse.com</p>
        </div>
      </div>

      <div className="ak__footer-copyright">
        <p>© {new Date().getFullYear()} AK Dream House. All rights reserved.</p>
      </div>
      <div className="footer-bottom-back-to-top-btn">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Footer;
