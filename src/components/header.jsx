import React, { useState } from 'react';
import './Header.css';
import headerImage from '../assets/BG.jpg';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="header">
      <h1></h1>
      <div className="image-wrapper">
        <img
          src={headerImage}
          alt="Blur placeholder"
          className={`header-image blur ${loaded ? 'hidden' : ''}`}
        />
        <img
          src={headerImage}
          alt="IT Industry in Manila"
          className={`header-image full ${loaded ? 'visible' : ''}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <br />
      <p>
        Departing Zamboanga at night, our group excitedly boards the plane to Manila, ready for the Educational Tour.
      </p>
    </header>
  );
};

export default Header;
