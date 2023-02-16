import React from "react";
import BreadCrump from "../../components/BreadCrump";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { TeamMember } from "../../constants/about_Team_Member";

import "./style.scss";

const AboutUs = () => {
  return (
    <div className="AboutUS">
      <BreadCrump
        breadCrumps={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "About us",
            link: "/about_us",
          },
        ]}
      />
      <div className="AboutUS-container">
        <div className="ContactUs-container-heading">
          <Heading title="About us" />
        </div>
        <div className="AboutUS-container-box">
          <small>Who we are...</small>
          <h3 className="AboutUS-container-box-heading">AK Dream House</h3>
          <p className="AboutUS-container-box-sub-heading">
            Innovative & Interior Designer Experts
          </p>
          <p className="AboutUS-container-box-para-1">
            We are AK Dream House whose professional turns building design into
            reality. We develop concepts for structures and then work with
            engineers to ensure those designs function as desired in their
            intended setting or project goal. Beyond operational standards, We
            also need to meet safety standards to ensure no harm to our clients.{" "}
            AK Dream House is an all-in-one platform for best and professional
            architects. We have customers all around the world for our smart
            technology, and inspiring designs.We are architectures is used in
            creating a logical layout of a website in line with the user and/or
            business requirements. It defines the different components that will
            make up a website and the services each component or the website
            will provide in whole. Founded in 2020 and located at Dewas-Madhya
            Pradesh, India, 455001.
          </p>
          <p className="AboutUS-container-box-para-2">
            AK Dream House Ensure...
          </p>
          <p className="AboutUS-container-box-para-3">
            Make Your House Exterior Stand Out from the Rest with Our
            Outstanding 3D Elevation Designs! AK Dream House is developing
            online services provide all types of 3D Design, 3D Elevation, 3D
            Exterior Elevation & distinct kinds of home designs in over India.
            We provide all kinds of 3D Front Elevation Designs everywhere in
            India just order and get your 3D Front Elevation Design and
            construct your home with an exceptional Elevation Front Design. 3D
            Elevation Give wings to your imaginations as we design a 3D
            perspective view for your dream house. What's the better than a 3D
            view of how it would look before you invest a fortune in your house
            project. Our Dynamic Team give you outstanding and out of the box 3D
            plan of your Dream House.
          </p>
        </div>
      </div>

      <div className="AboutUS-container-3">
        <div className="AboutUS-container-3-innerBox">
          <div className="AboutUS-container-3-innerBox-heading">
            <Heading title="Our Team" />
          </div>
          <div className="AboutUS-container-3-innerBox-team">
            <div className="AboutUS-container-3-innerBox-team-card">
              {TeamMember.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="card-img" style={{backgroundImage:`url(${item.image})`}}> </div>
                    <div className="card-info">
                      <div className="card-info-left">
                        <p className="title">{item.name}</p>
                        <p className="subtitle">{item.designation}</p>
                      </div>
                      <div>
                        <Button title="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUS-container-2">
        <div className="contact-us-page-form AboutUS-form">
          <div className="contact-us-page-form-heading">
            <Heading title="Contact Form" />
            <span>Enter your details to recieve call from us ASAP </span>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Full Name"
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="floatingPassword"
              placeholder="Mobile Number"
            />
            <label htmlFor="floatingPassword">Mobile Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
