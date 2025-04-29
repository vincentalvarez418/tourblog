import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import iconLogo from "../resources/navbaricon.png";
import homeIcon from "../resources/home.png";
import destinationsIcon from "../resources/destinations.png";
import arrowIcon from "../resources/arrow.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  const handleDestinationsClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src={iconLogo} alt="Logo" className="logo-icon" />
            <span className="logo-text">EDUCATIONAL TOUR BLOG</span>
          </div>

          <div className="nav-links">
          <Link to="/" onClick={handleHomeClick}>
            <img src={homeIcon} alt="Home" className="nav-icon nav-home" />
          </Link>

          {location.pathname === "/" ? (
            <a href="#destinations">
              <img src={destinationsIcon} alt="Destinations" className="nav-icon nav-destination" />
            </a>
          ) : (
            <button onClick={handleDestinationsClick} className="icon-button">
              <img src={arrowIcon} alt="Scroll to top" className="nav-icon nav-arrow" />
            </button>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}
