import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// custom module
import "./NavigationBar.scss";

function NavigationBar() {
  const [tabNavFlag, setTabNavFlag] = useState(false);
  const [navBackgroundColor, setNavBackgroundColor] = useState(false);

  //modules
  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    window.pageYOffset > 150
      ? setNavBackgroundColor("true")
      : setNavBackgroundColor(false);
  });

  const handleOpenMenuClick = () => setTabNavFlag(!tabNavFlag);

  const mobileNavigationClose = () => setTabNavFlag(false);

  return (
    <nav
      className={`navigation ${
        navBackgroundColor && "navigation-change-background"
      }`}
    >
      <div className="navigation-container">
        <div className="navigation-container-logo">
          <h2 onClick={() => navigate("/")}>AK Dream House</h2>
        </div>
        <div className="hamburger" onClick={handleOpenMenuClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul
          className={`nav-links ${tabNavFlag && "open"}`}
          onClick={mobileNavigationClose}
        >
          <div className="navigation-mobile-logo">
            <h2>A.K. Architect</h2>
          </div>
          <li className="header-link">
            <Link to="/services">Services</Link>
          </li>
          <li className="header-link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="header-link">
            <Link to="/about-us">About us</Link>
          </li>
          <li className="header-link">
            <Link to="/conact-us">Contact us</Link>
          </li>
          <li className={`header-link ${tabNavFlag && "open"}`}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
