import React from 'react';
import './Header.css';
import headerImage from '../assets/BG.jpg';
import AnimatedReveal from './AnimatedReveal';

const Header = () => {
  return (
    <AnimatedReveal index={0}>
      <header className="header">
        <h1></h1>
        <img src={headerImage} alt="IT Industry in Manila" className="header-image" />
        <br />
        <p>
          Departing Zamboanga at night, our group excitedly boards the plane to Manila, ready for the Educational Tour.
        </p>
      </header>
    </AnimatedReveal>
  );
};

export default Header;
