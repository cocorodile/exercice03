import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Contact from './contents/Contact';
import Competence from './contents/Competences';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    <Route path="/competence">
    <Competence />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
  