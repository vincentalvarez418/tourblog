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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  
  const handleDestinationsClick = () => {
    handleScrollToTop();
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  

  const handleSmoothScroll = () => {
    const el = document.getElementById("destinations");
    const yOffset = -window.innerHeight * 0.1;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  
  const handleLogoClick = () => {
    const logo = document.querySelector(".logo-icon");
    if (logo) {
      logo.classList.add("bus-drive");
      setTimeout(() => {
        logo.classList.remove("bus-drive");
      }, 1200);
    }
  };
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
          <div className="logo" onClick={handleLogoClick}>
            <img src={iconLogo} alt="Logo" className="logo-icon" />
            <span className="logo-text">The Manila Expedition</span>
          </div>
           
          </div>

          <div className="nav-links">
          <Link to="/" onClick={handleHomeClick}>
            <img src={homeIcon} alt="Home" className="nav-icon nav-home" />
          </Link>

          {location.pathname === "/" ? (
            <button onClick={handleSmoothScroll} className="icon-button">
              <img src={destinationsIcon} alt="Destinations" className="nav-icon nav-destination" />
            </button>
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
