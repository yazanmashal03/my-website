import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';
import querio from "./assets/querio.jpg";
import mids from "./assets/mids.jpg";

function ProjectList() {
  const projects = [
    {
      title: "Querio",
      description: "Developed in collaboration with NextSelect specific features that facilitate the day-to-day operations of imec, one of Europe's leading chip manufacturing companies.",
      imageUrl: querio,
      tags: ["PHP", "MYSQL", "CSS", "Docker", "HTML"],
      backgroundColor: "#212bf7",
      link: "https://querio.imec.be/"
    },
    {
        title: "MIDS",
        description: "Developed in collaboration with NextSelect specific features that facilitate the day-to-day operations of MASER, one of Europe's leading chip testing companies.",
        imageUrl: mids,
        tags: ["PHP", "MYSQL", "CSS", "Docker", "HTML"],
        backgroundColor: "#1c7a5c", // make it green
        link: "https://mids.maser.nl/"
    }
    // Add more projects as needed...
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          tags={project.tags}
          backgroundColor={project.backgroundColor}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectList;
