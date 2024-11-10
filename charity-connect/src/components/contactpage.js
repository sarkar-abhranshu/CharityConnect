import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import './contactpage.css';

const ContactPage = () => {
    useEffect(() => {
        document.title = 'Contact Us | CharityConnect';
    }, []);

    return (
        <>
            <Header />
            <section className="contact-section">
                <h1>Contact us</h1>
                <p>
                    Call us on the given mobile numbers or fill the form and get an email within 24 hours!
                </p>
            </section>

            <section className="contact-details">
                <div className="contact-info">
                    <h2>Phone</h2>
                    <p>
                        +91 9876543210<br />
                        +91 9876543210
                    </p>
                </div>
                
                <div className="contact-form">
                    <h2>Connect with Us</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ContactPage;