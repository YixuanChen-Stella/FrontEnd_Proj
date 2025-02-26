import React, { useEffect } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.jpg';

function Header() {
  useEffect(() => {
    document.title = 'Cat Café';
  }, []);

  return (
    <header className="header">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <img src={logo} alt="Cat Café Logo" className="header-logo" />
      <h1 className="header-title">Cat Café</h1>
    </header>
  );
}

export default Header; 