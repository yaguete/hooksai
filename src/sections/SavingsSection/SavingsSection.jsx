import React, { forwardRef } from "react";
import "./SavingsSection.css";
import SavingsForm from "../../components/SavingsForm/SavingsForm";

const SavingsSection = forwardRef((props, ref) => {
    return (
      <div ref={ref} className="savings-section-container">
        <SavingsForm />
      </div>
    );
  });
  
  export default SavingsSection;
