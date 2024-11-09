import React from 'react';
import './opportunities.css';

function Opportunities() {
  return (
    <section className="opportunities">
      <h2>Explore <span>volunteering opportunities</span> that interest you</h2>
      <div className="opportunity-categories">
        <div className="category">
          <div className="icon-placeholder"></div>
          <p>Education & Literacy</p>
        </div>
        <div className="category">
          <div className="icon-placeholder"></div>
          <p>Children</p>
        </div>
        <div className="category">
          <div className="icon-placeholder"></div>
          <p>Health</p>
        </div>
      </div>
      <div className="statistics">
        <div className="stat">
          <p>84,235</p>
          <span>Volunteers</span>
        </div>
        <div className="stat">
          <p>500</p>
          <span>NGOs</span>
        </div>
        <div className="stat">
          <p>3,53,500</p>
          <span>Volunteer Hours</span>
        </div>
        <div className="stat">
          <p>₹ 1,75,68,000</p>
          <span>Amount Saved</span>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;