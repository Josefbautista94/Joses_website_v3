// src/sections/Projects.jsx
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Example Project Card */}
        <div className="project-card">
          <h3>FitFuel</h3>
          <p>A fitness-focused e-commerce app for supplements and gear.</p>
          <p><strong>Tech:</strong> React, Express, MongoDB</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/fitfuel" target="_blank">GitHub</a>
            <a href="https://fitfuel-demo.netlify.app" target="_blank">Live Demo</a>
          </div>
        </div>

        {/* Add more project cards below 👇 */}
      </div>
    </section>
  );
}
