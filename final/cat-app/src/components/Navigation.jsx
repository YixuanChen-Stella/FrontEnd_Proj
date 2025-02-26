import React, { useState } from 'react';
import '../styles/Navigation.css';
import icon from '../images/icon.svg';

function Navigation({ setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <img src={icon} alt="Menu" className="icon" />
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a onClick={() => { setPage('home'); setIsMenuOpen(false); }}>Home</a></li>
        <li><a onClick={() => { setPage('order'); setIsMenuOpen(false); }}>Order</a></li>
        <li><a onClick={() => { setPage('adoption'); setIsMenuOpen(false); }}>Adoption</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;