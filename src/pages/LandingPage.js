import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeroSection from "../components/landing/HeroSection"
import CategorySection from "../components/landing/CategorySection";
import FeatureSection from "../components/landing/FeatureSection";


const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection/>
      <FeatureSection/>
    </>

  )
};

export default LandingPage;
