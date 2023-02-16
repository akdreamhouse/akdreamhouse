import React from "react";
import "./style.scss";

const Button = (props) => {
  const { title, onButtonClick } = props;
  return (
    <button className="learn-more" onClick={onButtonClick}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{title}</span>
    </button>
  );
};

export default Button;
