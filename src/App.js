import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [visible, setVisible] = useState(true); // For fade effect

  // Use effect to trigger fade-out and fade-in effect
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500); // After 0.5s, make it visible again
    return () => clearTimeout(timeout);
  }, [activeSection]); // Depend on activeSection change

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      <main className={visible ? '' : 'hidden'}>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
