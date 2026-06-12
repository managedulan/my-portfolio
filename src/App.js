import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Import Page Components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        {/* 1. Header with Sticky Navigation */}
        <header className="navbar" role="banner">
          <div className="container nav-container">
            <NavLink to="/" className="nav-logo" aria-label="M G Dulan Portfolio Home">
              M G DULAN
              <span className="nav-logo-dot" />
            </NavLink>
            <nav role="navigation" aria-label="Main Navigation">
              <ul className="nav-links">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/projects" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* 2. Main Content Body with Route Switcher */}
        <main className="container" role="main" style={{ minHeight: 'calc(100vh - var(--header-height) - 75px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 3. Footer */}
        <footer className="footer-text" role="contentinfo">
          <div className="container">
            <p>© {new Date().getFullYear()} M G Dulan. Crafted using React.js and HCI design rules.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
