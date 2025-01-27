import React from "react";
import FeatureBox from "../../components/FeatureBox/FeatureBox";
import "./featureSection.css";

const FeatureSection = () => {
  return (
    <div className="feature-section">
        <div className="box-you">
            <FeatureBox
            title="You"
            subtitle="do the last sanity check before printing."
            image="/public/images/preview.png" // Ajusta la ruta según tu proyecto
            />
        </div>
        <div className="box-ai">
            <FeatureBox 
            title="AI"
            subtitle="does the check, fix and enhance it for you."
            image="/public/images/enhancedviaai.png" // Ajusta la ruta según tu proyecto
        />
        </div>
    </div>
  );
};

export default FeatureSection;