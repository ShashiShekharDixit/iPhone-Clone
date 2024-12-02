import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src="/logo.png" alt="Apple Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#iphone">iPhone</a></li>
          <li><a href="#mac">Mac</a></li>
          <li><a href="#ipad">iPad</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
