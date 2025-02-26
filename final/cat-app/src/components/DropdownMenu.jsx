import React, { useState } from 'react';
import '../styles/DropdownMenu.css'; 

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="dropdown-menu">
      <ul className="menu-list">
        <li 
          className="menu-item" 
          onMouseEnter={() => handleMouseEnter('coffee')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menu-button">Coffee</button>
          <ul className={`submenu ${activeMenu === 'coffee' ? 'active' : ''}`}>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Espresso" target="_blank" rel="noopener noreferrer">Espresso</a>
            </li>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Latte" target="_blank" rel="noopener noreferrer">Latte</a>
            </li>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Cappuccino" target="_blank" rel="noopener noreferrer">Cappuccino</a>
            </li>
          </ul>
        </li>
        <li 
          className="menu-item" 
          onMouseEnter={() => handleMouseEnter('juice')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menu-button">Juice</button>
          <ul className={`submenu ${activeMenu === 'juice' ? 'active' : ''}`}>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Orange_juice" target="_blank" rel="noopener noreferrer">Orange</a>
            </li>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Apple_juice" target="_blank" rel="noopener noreferrer">Apple</a>
            </li>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Grape_juice" target="_blank" rel="noopener noreferrer">Grape</a>
            </li>
          </ul>
        </li>
        <li 
          className="menu-item" 
          onMouseEnter={() => handleMouseEnter('dessert')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menu-button">Dessert</button>
          <ul className={`submenu ${activeMenu === 'dessert' ? 'active' : ''}`}>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Cheesecake" target="_blank" rel="noopener noreferrer">Cheesecake</a>
            </li>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Brownie" target="_blank" rel="noopener noreferrer">Brownie</a>
            </li>
            <li className="submenu-item">
              <a href="https://en.wikipedia.org/wiki/Ice_cream" target="_blank" rel="noopener noreferrer">Ice Cream</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default DropdownMenu;