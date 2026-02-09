import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Infrastructure from './components/Infrastructure';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/20">
      <Navbar />
      <main>
        <Hero />
        <Infrastructure />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;