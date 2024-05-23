import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Things from './spacethings';

const Hero = () => {
  const [showThings, setShowThings] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowThings(!showThings);
  };

  const handleLogout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    navigate('/');
  };

  return (
    <div className="hero">
      <h2>Welcome to the Silliest and Funniest Space Things</h2>
      <button onClick={handleLogout}>
        Logout
      </button>
      <button onClick={handleClick} className="hero-button">
        {showThings ? 'Hide' : 'Explore More'}
      </button>
      {showThings && <Things />}
    </div>
  );
};

export default Hero;
