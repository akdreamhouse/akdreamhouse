import React from 'react';
import possibleImage from '../../../../assets/possibility.png';
import './possible.css'; 



const Possible = () => (
  <div className="ak__possible section__padding" id="3D_exterior_design">
    <div className="ak__possible-image">
      <img src={possibleImage} alt="possibile" />
    </div>
    <div className="ak__possible-content">
      <h4>AK Architect's Ensure...</h4>
      <h1 className="gradient__text">Make Your House Exterior Stand Out from the Rest with Our Outstanding 3D Elevation Designs!</h1>
      <p>AK Architects is developing online services provide all types of 3D Design, 3D Elevation, 3D Exterior Elevation & distinct kinds of home designs in over India. We provide all kinds of 3D Front Elevation Designs everywhere in India just order and get your 3D Front Elevation Design and construct your home with an exceptional Elevation Front Design.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possible;