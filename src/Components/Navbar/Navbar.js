import React, { useState, useEffect } from "react";
import "./Navbar.css";
import open from "../../Assets/open.png";
import close from "../../Assets/close.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);
  

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      <nav className={` ${scrolling ? 'scrolling' : ''}`}>
        <div className="logo">
          RightsQuest
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <img className="bar" id="toggle-icon" src={isMenuOpen ? close : open} alt="Menu" />
        </div>

        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="aboutpg" onClick={closeMenu}>About</a></li>
          <li><a href="skillpg" onClick={closeMenu}>Dashboard</a></li>
          <li><a href="projectspg" onClick={closeMenu}>Support</a></li>
          <li><a href="contactpg" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
