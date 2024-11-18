import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <a href="/home" className="logo">CharityConnect</a>
      <div className='links-menu'>
        <nav>
          <a href="/services">Services</a>
          <a href="/contact">Contact us</a>
          <a href="/about">About us</a>
        </nav>
        <div className="hamburger-menu">
          <a href='/ham' className='bar'></a>
          <a href='/ham' className='bar'></a>
          <a href='/ham' className='bar'></a>
        </div>
      </div>
    </header>
  );
}

export default Header;