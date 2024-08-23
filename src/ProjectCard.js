import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, tags, backgroundColor, link }) {
  return (
    <div className="project-card" style={{ backgroundColor }}>
      <div className="project-card-content">
        <h2>{title}</h2>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p className="project-description">{description}</p>
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-card-button">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button>→</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
