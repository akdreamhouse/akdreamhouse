import React, { useEffect, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const [navBackgroundColor, setNavBackgroundColor] = useState(false);
  const [navMobileActive, setNaMobileActive] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  window.addEventListener("scroll", () => {
    window.pageYOffset > 70
      ? setNavBackgroundColor("true")
      : setNavBackgroundColor(false);
  });

  const mobileNavBarHandlar = () => {
    setNaMobileActive(!navMobileActive);
  };

  return (
    <div className={`header ${navBackgroundColor && "header-scrolled-bg"}`}>
      <div className="header-container">
        <div
          className={`header-logo ${
            navBackgroundColor && "header-logo-scroll"
          }`}
        >
          <h3 onClick={() => navigate("/")}>A.K. Dream House</h3>
        </div>
        <button className="btn" onClick={mobileNavBarHandlar}>
          <span className="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
              <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            </svg>
          </span>
          <span className="text">MENU</span>
        </button>
        <div
          className={`header-nav-links ${
            navMobileActive && "header-nav-links-mob_active"
          }`}
        >
          <Link
            to="/"
            className={`header-nav-link ${
              navBackgroundColor && "header-nav-link-scroll"
            }`}
          >
            <span>Home</span>
          </Link>
          <Link
            to="/about_us"
            className={`header-nav-link ${
              navBackgroundColor && "header-nav-link-scroll"
            }`}
          >
            <span>About us</span>
          </Link>
          <Link
            to="/services"
            className={`header-nav-link ${
              navBackgroundColor && "header-nav-link-scroll"
            }`}
          >
            <span>Services</span>
          </Link>
          <Link
            to="/portfolio"
            className={`header-nav-link ${
              navBackgroundColor && "header-nav-link-scroll"
            }`}
          >
            <span>Portfolio</span>
          </Link>
          <Link
            to="/contact_us"
            className={`header-nav-link ${
              navBackgroundColor && "header-nav-link-scroll"
            }`}
          >
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
