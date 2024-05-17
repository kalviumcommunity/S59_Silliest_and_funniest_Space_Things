import '../App.css';
import React, { useState } from 'react';
import Things from './spacethings';

const Hero = () => {
  const [showThings, setShowThings] = useState(false);

  const handleClick = () => {
    setShowThings(!showThings);
  };

  return (
    <div className="hero">
      <h2>Welcome to the Silliest and Funniest Space Things</h2>
      <button onClick={handleClick} className="hero-button">
        {showThings ? 'Hide' : 'Explore More'}
      </button>
      {showThings && <Things />}
    </div>
  );
};

export default Hero;
