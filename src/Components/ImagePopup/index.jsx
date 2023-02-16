import React from "react";

import "./style.scss";

import closeIcon from "../../assets/images/logo/close-icon.png";

const ImagePopup = (props) => {
  const { imgUrl, toggleHandlar } = props;

  console.log("imgUrl", imgUrl)
  return (
    <div className="ImagePopup">
      <div className="ImagePopup__overlay">
        <img src={imgUrl} alt="popup-img" className="popup-img" />
        <img
          src={closeIcon}
          alt="close"
          onClick={toggleHandlar}
          className="close-icon"
        />
      </div>
    </div>
  );
};

export default ImagePopup;
