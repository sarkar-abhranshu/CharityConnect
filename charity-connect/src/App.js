import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import Opportunities from './components/opportunities';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Opportunities />
      <Footer />
    </div>
  );
}

export default App;
