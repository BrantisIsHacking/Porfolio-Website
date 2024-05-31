import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      {/* Add more project cards here */}
    </div>
  );
};

export default Projects;