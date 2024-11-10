import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import Opportunities from './components/opportunities';
import Footer from './components/footer';
import AboutPage from './components/aboutpage';
import ContactPage from './components/contactpage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

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

  else if (pathname === '/login') {
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

  return (
    <>
      <Header />
      <HeroSection />
      <Opportunities />
      <Footer />
    </>
  );
}

export default App;
