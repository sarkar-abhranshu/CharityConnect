import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import Opportunities from './components/opportunities';
import Footer from './components/footer';
import AboutPage from './components/aboutpage';

function App() {
  const pathname = window.location.pathname;

  if (pathname === '/about') {
    return (
      <>
        <Header />
        <AboutPage />
        <Footer />
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
