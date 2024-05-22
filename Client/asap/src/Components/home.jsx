import '../App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import Things from './spacethings';

const Hero = () => {
  const [showThings, setShowThings] = useState(false);

  const handleClick = () => {
    setShowThings(!showThings);
  };
  const handleLogout = () => {
    const navigate = useNavigate();
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  
    React.useEffect(() => {
      setTimeout(() => {
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        navigate('/');
      }, 1000);
    }, [navigate]);
  
    return (
      <div className="logout-message">
        <h2>Logging out...</h2>
      </div>
    );
  };

  return (
    <div className="hero">
      <h2>Welcome to the Silliest and Funniest Space Things</h2>
      <button onClick={handleLogout}>
         {<Link to= "/Logout">Logout</Link>} 
      </button>
      <button onClick={handleClick} className="hero-button">
        {showThings ? 'Hide' : 'Explore More'}
      </button>
      {showThings && <Things />}
    </div>
  );
};

export default Hero;
