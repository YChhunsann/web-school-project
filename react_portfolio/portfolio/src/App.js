import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact /> {/* Add the Contact component */}
      <Footer />
    </div>
  );
};

export default App;