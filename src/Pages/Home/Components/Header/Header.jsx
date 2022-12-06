import React from "react";
// import people from '../../../assets/people.png';
import people from "../../../../assets/people.png";
import ai from "../../../../assets/g.png";
import "./header.scss";

const Header = (props) => (
  <div className="gradient__bg">
    <div className="ak__header section__padding" id="home">
      <div className="ak__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something Amazing with AK Dream House
        </h1>
        <p>
          We are AK Architects whose professional turns building design into
          reality. We develop concepts for structures and then work with
          engineers to ensure those designs function as desired in their
          intended setting or project goal. Beyond operational standards,
          We also need to meet safety standards to ensure no harm to
          our clients.
        </p>

        <div className="ak__header-content__input">
          <input type="email" placeholder="Your Email Address" onChange={e=> props.setUserEmailId(e.target.value)} />
          <button
            type="button"
            onClick={props.handleGetStarted}
          >
            Get Started
          </button>
        </div>

        <div className="ak__header-content__people">
          <img src={people} alt="people" />
          <p>160 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="ak__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  </div>
);

export default Header;
