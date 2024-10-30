import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import TokenSection from './components/TokenSection';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

const App = () => {
  return (
    <div className="min-h-screen bg-red-500 text-white">
      <div className="relative">
        <div className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-50">
          <Navbar />
        </div>
        <div className="container mx-auto px-4 space-y-24 py-24">
          <div className="floating">
            <Hero />
          </div>
          <Marquee />
          <div className="floating floating-delay-1">
            <Features />
          </div>
          <Marquee />
          <div className="floating floating-delay-2">
            <Team />
          </div>
          <Marquee />
          <div className="floating">
            <TokenSection />
          </div>
          <Marquee />
          <div className="floating floating-delay-1">
            <Roadmap />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;