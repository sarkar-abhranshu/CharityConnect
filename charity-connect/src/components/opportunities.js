import React from 'react';
import './opportunities.css';

function Opportunities() {
  return (
    <section className="opportunities">

      {/* Top Section (Heading) */}
      <div className="top">
        <h2>Explore <span>volunteering opportunities</span> that interest you</h2>
      </div>

      {/* Center Section (Categories) */}
      <div className="center">
        <div className="opportunity-categories">
          <div className="category">
            <img src="/health.webp" className="education-placeholder"></img>
            <p>Education & Literacy</p>
          </div>
          <div className="category">
            <img src="/child.webp"  className="children-placeholder"></img>
            <p>Children</p>
          </div>
          <div className="category">
            <img src="/school.webp" className="health-placeholder"></img>
            <p>Health</p>
          </div>
        </div>
      </div>

      {/* Bottom Section (Statistics) */}
      <div className="bottom">
        <div className="statistics">
          <div className="stat">
            <p>84,235</p>
            <span>Users</span>
          </div>
          <div className="stat">
            <p>500</p>
            <span>NGOs</span>
          </div>
          <div className="stat">
            <p>₹ 1,75,68,000</p>
            <span>Amount donated</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Opportunities;
