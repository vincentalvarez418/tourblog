import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import iconLogo from "../resources/navbaricon.png";

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
            <span className="logo-text">Educational Tour Blog</span>
          </div>

          <div className="nav-links">
            <Link to="/" onClick={handleHomeClick}>HOME</Link>
            {location.pathname === "/" ? (
              <a href="#destinations">DESTINATIONS</a>
            ) : (
              <button onClick={handleDestinationsClick}>
                ↑
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
