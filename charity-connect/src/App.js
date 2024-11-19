import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import Opportunities from './components/opportunities';
import Footer from './components/footer';
import AboutPage from './components/aboutpage';
import ContactPage from './components/contactpage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HamPage from './components/ham';
import ServicesPage from './components/ServicesPage';


function App() {
  const pathname = window.location.pathname;

  if (pathname === '/about') {
    return (
      <>
        <AboutPage />
      </>
    );
  }

  if (pathname === '/contact') {
    return (
      <>
        <ContactPage/>
      </>
    );
  }

  if (pathname === '/login') {
    return (
      <>
        <LoginPage/>
      </>
    );
  }

  if (pathname === '/signup') {
    return (
      <>
        <SignupPage />
      </>
    );
  }

  if (pathname === '/ham') {
    return (
      <>
        <HamPage />
      </>
    )
  }

  if (pathname === '/services') {
    return (
      <>
        <ServicesPage />
      </>
    );
  }

  if (pathname === '/home') {
    return (
      <>
        <Header />
        <HeroSection />
        <Opportunities />
        <Footer />
      </>
    );
  }
}

export default App;
