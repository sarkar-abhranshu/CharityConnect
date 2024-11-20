import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import './contactpage.css';

const ContactPage = () => {
    useEffect(() => {
        document.title = 'Contact Us | CharityConnect';
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSuccessMessage('Thank you for contacting us! We will get back to you shortly.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Header />
            <section className="contact-details">
                {/* Header on the left */}
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <p>
                        Call us on the given mobile numbers or fill the form and get an email within 24 hours!
                    </p>
                    <h2>Phone</h2>
                    <p>
                        +91 9876543210<br />
                        +91 9876543210
                    </p>
                </div>

                {/* Form on the right */}
                <div className="contact-card">
                    <div className="contact-form">
                        <h2>Connect with Us</h2>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <form onSubmit={handleSubmit}>
                            {/* Form Fields */}
                            <div className="form-group">
                                <label htmlFor="name">Name*</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone*</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    value={formData.message} 
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ContactPage;