import React from 'react';
import { IconAcademic } from '../components/Icons';

function About() {
  const skills = {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Python', 'Java', 'SQL'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Git & GitHub'],
    hci: ['Usability Testing', 'Figma Prototyping', 'A/B Testing', 'Cognitive Walkthrough', 'WCAG 2.1 AA Compliance', 'Persona Mapping']
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="animate-fade-in">
      <h2 id="about-heading" className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-details">
          <p>
            Hi there! I am <strong>M G Dulan</strong>, an Information Technology undergraduate. I specialize in designing and engineering frontend applications that are clean, readable, and highly accessible.
          </p>
          <p>
            My approach to coding is user-centric. I believe web performance, clean semantic layout, and visual accessibility form the core of great user experiences. I study technology to bridge the gap between design and engineering.
          </p>
          <div className="education-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--primary)' }}><IconAcademic /></span>
              <span className="education-title">Education</span>
            </div>
            <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>National Diploma in Technology (Information Technology) - NDT IT</p>
            <p className="education-meta">Institute of Technology, University of Moratuwa (ITUM)</p>
          </div>
        </div>

        <div className="skills-container">
          <div className="skills-group">
            <h3 className="skills-section-title">Languages & Core</h3>
            <div className="skills-list">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-section-title">Frameworks & Tools</h3>
            <div className="skills-list">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-section-title">HCI Methods & Techniques</h3>
            <div className="skills-list">
              {skills.hci.map((skill, index) => (
                <span key={index} className="skill-badge" style={{ borderColor: 'rgba(168, 85, 247, 0.25)' }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
