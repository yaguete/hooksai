import React from "react";
import FeatureBox from "../../components/FeatureBox/FeatureBox";
import "./FeatureSection.css";
import enhancedviaai from "../../assets/Images/enhancedviaai.png";
import preview from "../../assets/Images/preview.png";

const FeatureSection = () => {
  return (
    <div className="feature-section">
        <div className="box-you">
            <FeatureBox
            title="You"
            subtitle="do the last sanity check before printing."
            image= {preview} 
            />
        </div>
        <div className="box-ai">
            <FeatureBox 
            title="AI"
            subtitle="does the check, fix and enhance it for you."
            image= {enhancedviaai} 
        />
        </div>
    </div>
  );
};

export default FeatureSection;