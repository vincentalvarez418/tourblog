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
      It was already night when we left Zamboanga. Our whole group was excited as we boarded the plane to Manila. Everyone was in a good mood — some were laughing, some were quietly smiling. You could really feel the excitement in the air. We were all set for our Educational Tour, ready to explore, learn, and create unforgettable memories together.
      </p>
    </header>
  );
};

export default Header;
