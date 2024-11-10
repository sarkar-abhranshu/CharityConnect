import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">CharityConnect</a>
      <div className='links-menu'>
        <nav>
          <a href="/login">Services</a>
          <a href="/contact">Contact us</a>
          <a href="/about">About us</a>
        </nav>
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;