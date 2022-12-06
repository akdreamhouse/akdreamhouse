import React, { useEffect, useState } from "react";
import ContactFormModal from "../../Components/Modal/ContactModal";
// import { useNavigate } from "react-router-dom";

// manual modules
import "./ContactUs.scss";

function ContactUs() {
  // const navigate = useNavigate();
  const [isOpenContactFormModel, setIsOpenContactFormModel] = useState(false);

  useEffect(() => {
    document.title = "A.K. Dream House - Contact us";
  }, []);

  return (
    <div className="contact-us-page gradient__bg">
      <div className="contact-us-page-container">
        <div className="contact-us-page-header">
          <h1 className="gradient__text">Contact us</h1>
          <h3>We'd love to hear from you</h3>
          <p>
            Please let us know if you have further questions/discussion.
            <br />
           <span>Feel free to contact us.</span>
          </p>
          <button
            className="get-in-touch"
            onClick={() => setIsOpenContactFormModel(true)}
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className="contact-us-page-contacts">
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
        <a href="tel:9926324562" className="contact-us-page-contacts-box">
          <i className="fas fa-phone-volume"></i>
          <h4>Phone</h4>
          <span>07271-55658</span>
        </a>
        <a
          href="mailto:contact@akarchitect.com"
          className="contact-us-page-contacts-box"
        >
          <i className="fas fa-envelope-open-text"></i>
          <h4>Email</h4>
          <span>contact@akarchitect.com</span>
        </a>
      </div>
      <div className="contact-us-page-map">
        <div className="contact-us-page-map-left">
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
                128 madhuban colony (AB road) behind Reliance pump , Dewas M.P.
                <br />
                Pin code : 455001
              </span>
            </p>
            <p>
              <i className="fas fa-phone-volume"></i>
              <span>07271-55658</span>
            </p>
            <p>
              <i className="fas fa-envelope-open-text"></i>
              <span>contact@akarchitect.com</span>
            </p>
          </div>
        </div>
      </div>
      <ContactFormModal
        isOpen={isOpenContactFormModel}
        setIsOpen={setIsOpenContactFormModel}
      />
    </div>
  );
}

export default ContactUs;
