import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email:</p>
          <a href="mailto:xxx1234@gmail.com">xxx1234@gmail.com</a>
          <a href="mailto:xxx1234@gmail.com">xxx1234@gmail.com</a>
        </div>
        <div className="contact-info">
          <p>Call on:</p>
          <a href="tel:+919876543210">+91 9876543210</a>
          <a href="tel:+919876543210">+91 9876543210</a>
        </div>
        <div className="social-links">
          <p>Let's Connect</p>
          <a href="/signup">Sign Up</a>
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="quick-links">
        <a href="/about">About us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy</a>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 CharityConnect Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;