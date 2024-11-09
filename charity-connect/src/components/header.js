import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">CharityConnect</div>
      <nav>
        <a href="#services">Services</a>
        <a href="#contact">Contact us</a>
        <a href="#about">About us</a>
      </nav>
      <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;