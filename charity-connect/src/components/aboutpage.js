import React, { useEffect } from 'react';
import './aboutpage.css';
import Header from './header';
import Footer from './footer';

function AboutPage() {
    useEffect(() => {
        document.title = 'About CharityConnect';
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <main>
                    <section className="about-us">
                        <img src="/abouts.png" alt="About Us" />
                        <h2 className="About">About Us</h2>
                        <p>CharityConnect is a leading platform that empowers individuals and organizations to make a meaningful impact on society. We provide comprehensive resources and opportunities for volunteering, fundraising, and social entrepreneurship. By connecting diverse stakeholders, we foster collaboration, innovation, and sustainable social change. Our goal is to create a more compassionate and equitable world where everyone can contribute to making a difference.</p>
                    </section>

                    <section className="vision">
                        <img src="/vision.png" alt="Vision" />
                        <h2 className="Vision">Vision</h2>
                        <p>Our vision is to establish CharityConnect as the leading platform in India, uniting organizational entities and individuals in collaborative efforts to drive positive social change.</p>
                    </section>

                    <section className="mission">
                        <img src="/mission.png" alt="Mission" />
                        <h2 className="Mission">Mission</h2>
                        <p>CharityConnect is committed to providing comprehensive resource solutions that bridge NGOs, volunteers, and corporates. We aim to create mutually beneficial partnerships and enhance the effectiveness and structure of these associations.</p>
                    </section>
                </main>

                <footer className="team">
                    <div className="member">
                        <h2 style={{ fontSize: '45px' }}>Team</h2>
                        <ul>
                            <li className="ab">Abhranshu Sarkar</li>
                            <li className="ak">Akhilesh M</li>
                            <li className="as">A. Surya Srikhar</li>
                        </ul>
                    </div>
                </footer>
            </div>
            <Footer/>
        </>
    );
};

export default AboutPage;