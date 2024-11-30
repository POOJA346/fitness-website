import React from 'react';
import HeroBannerImage from '../assets/images/b4.jpg';


const HeroBanner = () => (
  <div className="hero-banner">
    <div className="text-section">
      <h2 className="hero-title">Fitness Club</h2>
      <h1 className="hero-slogan">
        Sweat, Smile <br />
        And Repeat
      </h1>
      <p className="hero-description">
        Check out the most effective exercises personalized to you
      </p>
      <a href="#exercises" className="explore-button">Explore Exercises</a>
      
    </div>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </div>
);

export default HeroBanner;

