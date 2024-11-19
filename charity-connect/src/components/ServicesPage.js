import React from 'react';
import './ServicesPage.css';
import Header from './header';
import Footer from './footer';

function ServicesPage() {
  return (
    <>
      <Header />
      <section className="services-page">
        {/* Hero Section */}
        <div className="services-hero">
          <h1>
            Our Premium <span>Services</span>
          </h1>
          <p>
            Explore a wide range of services designed to cater to your needs and
            goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          <div className="service-card">
            <h2>Consulting</h2>
            <p>
              Expert guidance to help you achieve your business objectives
              efficiently.
            </p>
          </div>
          <div className="service-card">
            <h2>Web Development</h2>
            <p>
              Customized, user-friendly websites to showcase your brand
              effectively.
            </p>
          </div>
          <div className="service-card">
            <h2>Digital Marketing</h2>
            <p>
              Strategies to boost your online presence and reach a wider
              audience.
            </p>
          </div>
          <div className="service-card">
            <h2>Customer Support</h2>
            <p>
              24/7 support to assist your customers and improve satisfaction.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="services-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>120+</h3>
            <p>Successful Projects</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </>
  );
}


export default ServicesPage;
