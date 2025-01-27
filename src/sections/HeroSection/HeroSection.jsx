import React from 'react';
import './HeroSection.css';
import watchIcon from '../../assets/stopwatch.svg';
import ecologyIcon from '../../assets/ecology.svg';
import moneyIcon from '../../assets/piggy-bank.svg';
import { NavLink } from "react-router-dom";

const HeroSection = ({ onCalculateClick }) => {
  return (
    <div className="hero-section">
        {/* Título principal */}
        <h1 className="hero-title">PERFECT FIRST TIME PRINTING 
            <img
            src={ watchIcon }
            alt="Save your time"
            width="40"
            height="40"
            style={{ marginLeft: "20px", verticalAlign: "middle" }}/>
            <img
            src={ ecologyIcon }
            alt="Save your planet"
            width="40"
            height="40"
            style={{ marginLeft: "20px", verticalAlign: "middle" }}/>
            <img
            src={ moneyIcon }
            alt="Save your money"
            width="40"
            height="40"
            style={{ marginLeft: "20px", verticalAlign: "middle" }}/>
            
            
            </h1>
        
      {/* Texto descriptivo */}
      <p className="hero-subtitle">
        <strong>Minimize</strong> the re-prints, <strong>enhance</strong> the quality of your documents and <strong>streamline</strong> your workflow.
      </p>

      {/* Botones */}
      <div className="hero-buttons">
        <button className="button-outline" onClick={onCalculateClick}>Calculate the savings</button>
        <NavLink to="/pricing">
          <button className="button-filled">Get trial! ✦</button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default HeroSection;