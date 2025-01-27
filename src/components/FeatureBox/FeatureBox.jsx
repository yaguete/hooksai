import React from "react";
import "./featureBox.css";

const FeatureBox = ({ title, subtitle, image }) => {
  return (
    <div className="feature-box">
      <div className="feature-text">
        <h1 className="feature-title">{title}</h1>
        <p className="feature-subtitle">{subtitle}</p>
      </div>
      <img src={image} alt={title} className="feature-image" />
    </div>
  );
};

export default FeatureBox;