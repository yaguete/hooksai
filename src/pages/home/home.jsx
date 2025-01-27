import './home.css';
import React, { useRef } from "react";
import HeroSection from '../../sections/HeroSection/HeroSection';
import HowItWorks from '../../sections/howitworks/howitworks';
import FeatureSection from '../../sections/FeatureSection/FeatureSection';
import QuoteSection from '../../sections/QuoteSection/QuoteSection';
import SavingsSection from '../../sections/SavingsSection/SavingsSection';

const Home = () => {
  const savingsRef = useRef(null);

  const scrollToSavings = () => {
    savingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <HeroSection onCalculateClick={scrollToSavings}/>
      <HowItWorks />
      <QuoteSection />
      <FeatureSection />
      <SavingsSection ref={savingsRef}/>
    </div>
  );
};

export default Home;