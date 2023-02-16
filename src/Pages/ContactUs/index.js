import React, { useState } from "react";
import BreadCrump from "../../components/BreadCrump";
import Heading from "../../components/Heading";
import Testimonials from "../../components/Testimonials";
import "./style.scss";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formDtails, setFormDetails] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

const handleContactForm = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_tqoj7at",
      "template_fcg8ez8",
      e.target,
      "cptCvONY4E7AjzT_5"
    )
    .then(
      (result) => {
        if (result.text === "OK") {
          toast.success("We will reach you soon", {
            position: "bottom-center",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
};


  return (
    <div className="ContactUs">
      <BreadCrump
        breadCrumps={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Contact us",
            link: "/contact_us",
          },
        ]}
      />
      <div className="ContactUs-container">
        <div className="contact-us-page-contacts">
          <div className="ContactUs-container-heading">
            <Heading title="Contact us" />
          </div>
          <a
            href="https://goo.gl/maps/2eG9B67qhSqSbNgX9"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-us-page-contacts-box"
          >
            <i className="fas fa-location-arrow"></i>
            <h4>Address</h4>
            <span> Dewas M.P.</span>
          </a>
          <a href="tel:8889900387" className="contact-us-page-contacts-box">
            <i className="fas fa-phone-volume"></i>
            <h4>Phone</h4>
            <span>+91 889900387</span>
          </a>
          <a
            href="mailto:akdreamhousecare@gmail.com"
            className="contact-us-page-contacts-box"
          >
            <i className="fas fa-envelope-open-text"></i>
            <h4>Email</h4>
            <span>contact@akdreamhouse.com</span>
          </a>
        </div>

        <div className="contact-us-page-map">
          <div className="contact-us-page-map-left">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58771.73069868848!2d76.03673705627348!3d22.978451774961005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963176e71c0a165%3A0x7fa72fda899c0a85!2sAK%20Dream%20House!5e0!3m2!1sen!2sin!4v1676529458746!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.273304234856!2d76.06891761540595!3d22.97697532379547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317245515a555%3A0x85ea6472cb35f631!2sThe%20House%20Creation!5e0!3m2!1sen!2sin!4v1668777206444!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="myFrame"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-us-page-map-right">
            <h2 className="gradient__text">A.K. Dream House</h2>
            <div className="contact-us-page-map-right-contact-info">
              <p>
                <i className="fas fa-location-arrow my-address"></i>
                <span>
                  128, Amrit Complex, AB Road, Madhya Pradesh, Dewas, India
                  <br />
                  Pin code : 455001
                </span>
              </p>
              <p>
                <i className="fas fa-phone-volume"></i>
                <span>+91-8889900387</span>
              </p>
              <p>
                <i className="fas fa-envelope-open-text"></i>
                <span>contact@akarchitect.com</span>
              </p>
            </div>
          </div>
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="contact-us-page-form">
          <div className="contact-us-page-form-heading">
            <Heading title="Contact Form" />
            <span>Enter your details to recieve call from us ASAP </span>
          </div>
          <form onSubmit={handleContactForm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                name="name"
                placeholder="Full Name"
                required
                value={formDtails.name}
                onChange={(e) =>
                  setFormDetails({ ...formDtails, name: e.target.value })
                }
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email Id"
                required
                name="email"
                value={formDtails.email}
                onChange={(e) =>
                  setFormDetails({ ...formDtails, email: e.target.value })
                }
              />
              <label htmlFor="floatingEmail">Email Id</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingPassword"
                placeholder="Mobile Number"
                name="mobile"
                required
                value={formDtails.phone}
                onChange={(e) =>
                  setFormDetails({ ...formDtails, phone: e.target.value })
                }
              />
              <label htmlFor="floatingPassword">Mobile Number</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                name="message"
                required
                style={{ height: "100px" }}
                value={formDtails.message}
                onChange={(e) =>
                  setFormDetails({ ...formDtails, message: e.target.value })
                }
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
          </form>
        </div>

        <Testimonials />
      </div>
    </div>
  );
};

export default ContactUs;
