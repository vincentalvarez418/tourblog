import React from 'react';
import './Header.css';
import headerImage from '../assets/BG.jpg'; 

const Header = () => {
  return (
    <header className="header">
      <h1></h1>
      <img src={headerImage} alt="IT Industry in Manila" className="header-image" />
      <br></br>
      <p>The image captures the early morning view of Manila's skyline, with sunlight gradually illuminating the towering buildings and urban landscape. The soft light casts long shadows, highlighting the modern architecture of the city's office towers, residential complexes, and infrastructure. The bustling energy of Manila begins to stir, as the city starts its day, offering a glimpse of the fast-paced life and the vibrant atmosphere that defines the capital. The clear skies and the city's towering structures create a striking contrast, symbolizing Manila's dynamic growth and its position as the heart of the Philippines' business and culture.</p>
    </header>
  );
};

export default Header;
