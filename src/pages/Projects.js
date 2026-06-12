import React from 'react';
import { IconGithub, IconExternal } from '../components/Icons';

function Projects() {
  const projects = [
    {
      title: 'TaskFlow Dashboard',
      description: 'A minimalist task management software designed for cognitive ease. Keeps active projects persistently visible to reduce cognitive load and simplify workflow hierarchies.',
      tech: ['React.js', 'CSS Grid', 'LocalStorage'],
      github: 'https://github.com/managedulan/taskflow',
      image: process.env.PUBLIC_URL + '/project_task_manager.png'
    },
    {
      title: 'EduQuest Portal',
      description: 'An interactive learning platform dashboard designed using "Recognition rather than Recall" heuristics. Integrates gamified analytics and dynamic charts.',
      tech: ['React.js', 'SVG Graphics', 'Flexbox'],
      github: 'https://github.com/managedulan/eduquest',
      image: process.env.PUBLIC_URL + '/project_learning_app.png'
    },
    {
      title: 'SkySense App',
      description: 'A highly readable weather app emphasizing the "Visibility of System Status" principle. It provides clear, instantaneous updates and transitions on data retrieval.',
      tech: ['React.js', 'Rest API', 'CSS Transitions'],
      github: 'https://github.com/managedulan/skysense',
      image: process.env.PUBLIC_URL + '/project_weather_app.png'
    }
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="animate-fade-in">
      <h2 id="projects-heading" className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="glass-card project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={`Screenshot of ${project.title}`} 
                className="project-image"
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  aria-label={`GitHub Repository for ${project.title}`}
                >
                  <IconGithub />
                  <span>Code</span>
                </a>
                <a 
                  href="#demo" 
                  onClick={(e) => { e.preventDefault(); alert(`Interactive demo for ${project.title} is simulated for portfolio validation!`); }} 
                  className="project-link"
                  aria-label={`Live Demo for ${project.title}`}
                >
                  <IconExternal />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
