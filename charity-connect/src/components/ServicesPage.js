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
            <h2>Connections</h2>
            <p>
              Effectively connect with our network of partnr NGOs.
            </p>
          </div>
          <div className="service-card">
            <h2>Fundraising Campaigns</h2>
            <p>
              Efficiently run fundraising campaigns and reach a wide audience.
            </p>
          </div>
          <div className="service-card">
            <h2>Community Outreach</h2>
            <p>
              Reach out to a wide audience willing to participate or donate to your chairtable cause.
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
            <p>Partner NGOs</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}


export default ServicesPage;
