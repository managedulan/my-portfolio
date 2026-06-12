import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home" className="hero-section animate-fade-in" aria-labelledby="home-heading">
      <div className="hero-text-container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>NDT IT Undergraduate</span>
        </div>
        <h1 id="home-heading" className="hero-title">
          Designing for People,<br />Building for the <span>Web</span>.
        </h1>
        <p className="hero-subtitle">
          I am an IT undergraduate at ITUM (NDT IT) and frontend developer passionate about engineering highly intuitive web interfaces, visual accessibility, and building responsive applications.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary" aria-label="View my projects">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary" aria-label="Contact me directly">
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="hero-avatar-container">
        <div className="hero-avatar-wrapper">
          <img 
            src={process.env.PUBLIC_URL + '/developer_avatar.jpeg'} 
            alt="M G Dulan" 
            className="hero-avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
