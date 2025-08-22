import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Desktop/Tablet Nav */}
          <nav className="desktop-nav">
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

          {/* Mobile Right Side (mode toggle + hamburger) */}
          <div className="mobile-actions">
            <button
              className="mode-toggle glow-button"
              onClick={() => setDarkMode(prev => !prev)}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="mobile-nav">
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT ME</Link></li>
              <li><Link to="/projects" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
              <li>
                <a
                  href="/Sagar_CV.pdf"
                  download
                  className="cv-button glow-button"
                  onClick={() => setMenuOpen(false)}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        )}

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
