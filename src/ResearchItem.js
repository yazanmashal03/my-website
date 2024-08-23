import React from 'react';
import './ResearchItem.css';

function ResearchItem({ title, description, tags, paperLink, codeLink }) {
  return (
    <div className="research-item">
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p>{description}</p>
      <div className="links">
        {paperLink && <a href={paperLink} target="_blank" rel="noopener noreferrer">Read Paper</a>}
        {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>}
      </div>
    </div>
  );
}

export default ResearchItem;
