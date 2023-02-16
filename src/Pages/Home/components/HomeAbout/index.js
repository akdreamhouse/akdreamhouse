import React from "react";
import Button from "../../../../components/Button";
import Heading from "../../../../components/Heading";
import "./style.scss";

import aboutImg from "./../../../../assets/images/home-carousel/4.jpg";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="HomeAbout">
      <div className="HomeAbout-container">
        <Heading title="ABOUT US" />
        <div className="HomeAbout-about">
          <div className="HomeAbout-about-left">
            <div className="HomeAbout-about-left-imgBox">
              <img src={aboutImg} alt="About us" />
            </div>
          </div>
          <div className="HomeAbout-about-right">
            <div className="HomeAbout-about-right-card">
              <h3 className="HomeAbout-about-right-card-heading">
                AK Dream House
              </h3>
              <p className="HomeAbout-about-right-card-sub-heading">
                Innovative & Interior Designer Experts
              </p>
              <p className="HomeAbout-about-right-card-desc">
                We are AK Dream House whose professional turns building design
                into reality. We develop concepts for structures and then work
                with engineers to ensure those designs function as desired in
                their intended setting or project goal. Beyond operational
                standards, We also need to meet safety standards to ensure no
                harm to our clients.
              </p>
              <p className="HomeAbout-about-right-card-desc">
                <b>AK Dream House Ensure...</b>
                <br />
                Make Your House Exterior Stand Out from the Rest with Our
                Outstanding 3D Elevation Designs! AK Dream House is developing
                online services provide all types of 3D Design, 3D Elevation, 3D
                Exterior Elevation & distinct kinds of home designs in over
                India. We provide all kinds of 3D Front Elevation Designs
                everywhere in India just order and get your 3D Front Elevation
                Design and construct your home with an exceptional Elevation
                Front Design.
              </p>
              <p className="HomeAbout-about-right-card-request">
                Request early access to get started
              </p>

              <Button
                title="Contact us"
                onButtonClick={() => navigate("/about_us")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
