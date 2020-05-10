import React from 'react';
//Navigation and Landing Page
import Sitebar from './components/Sitebar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

//CSS
import './css/main.css';

function App() {
  return (
    <div className="app">
      <Sitebar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
