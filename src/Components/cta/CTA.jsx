import React from 'react';
import './cta.css';

const CTA = (props) => (
  <div className="ak__cta">
    <div className="ak__cta-content">
      <p>In Just Rs 3999 only</p>
      <h3>Get 100% customizable floor plan till your fulfilment.</h3>
    </div>
    <div className="ak__cta-btn">
      <button type="button" onClick={()=> props.navigate('/services')}>Order Now</button>
    </div>
  </div>
);

export default CTA;