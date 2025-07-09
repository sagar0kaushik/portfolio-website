import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className="container">
        <header className="navbar">
          <div className="logo">
            <span className="logo-box">SAGAR</span>
            <span className="logo-text">KAUSHIK</span>
          </div>

          <nav>
            <ul className="nav-links">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT ME</Link></li>
              <li><Link to="/projects">PORTFOLIO</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li>
                <a href="/Sagar_CV.pdf" download className="cv-button glow-button">
                  Download CV
                </a>
              </li>
              <li>
                <button
                  className="mode-toggle glow-button"
                  onClick={() => setDarkMode(prev => !prev)}
                >
                  {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

