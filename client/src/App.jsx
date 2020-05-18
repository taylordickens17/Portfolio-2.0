import React from 'react';

//Components
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Projects/Portfolio';
import PetPals from './components/Projects/PetPals';
import BookReview from './components/Projects/BookReview';
import SpaceVisualizer from './components/Projects/SpaceVisualizer';
import Skills from './components/Skills';
import Contact from './components/Contact';

//Routes
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

//CSS
import './css/main.css';

function App() {
  return (
    <div className="app">
      {/* <Sitebar /> */}
      <Router>
        <Route exact path="/">
          <Home />
          <Portfolio />
          <About />
          <Skills />
          <Contact />
        </Route>

        <Route exact path="/petpals">
          <PetPals />
        </Route>

        <Route exact path="/spacevisualizer">
          <SpaceVisualizer />
        </Route>

        <Route exact path="/bookreview">
          <BookReview />
        </Route>
      </Router>
    </div>
  );
}

export default App;
