import React from 'react';
import ResearchItem from './ResearchItem';
import './ResearchList.css';

function ResearchList() {
  const researchItems = [
    {
      title: "Gradient Descent with random minibatches",
      description: "This thesis explores the dynamics and convergence properties of gradient descent algorithms when integrated with random minibatch.",
      tags: ["Grade: 9/10", "Bachelor Thesis"],
      paperLink: "https://essay.utwente.nl/100665/", // Replace with actual link
      codeLink: "https://github.com/yazanmashal03/projects/tree/main/bachelor_thesis/src" // Replace with actual link
    },
    {
      title: "Developing a parity game GUI",
      description: "Designing and developing a GUI to display and solve parity games for Tom van Dijk.",
      tags: ["Grade: 8/10", "Design Project"],
      paperLink: "https://bachelorshowcase-eemcs.apps.utwente.nl/view/4XMBs3wv", // Replace with actual link
      codeLink: "https://github.com/MikiVanousek/parity-games" // Replace with actual link
    },
    {
        title: "Intership for imec Inc. in Leuven",
        description: "The internship project for imec revolved around designing and developing a stock management system for the nanotechnology company.",
        tags: ["Grade: 9/10", "Internship"],
        paperLink: "https://drive.google.com/file/d/1pxxkhMFYWGncaZM9RqVzO3sQVQDbM8vP/view", // Replace with actual link
        codeLink: "" // Replace with actual link
    },
    {
        title: "Statistical analysis of the poverty index",
        description: "Levareged tools of statistical analysis to draw several important conclusions from the Poverty Index provided by the United Nations Data website.",
        tags: ["Grade: 9.5/10", "Best Grade", "R"],
        paperLink: "https://drive.google.com/file/d/1hdskYpqbOcW-UjXvUKOZeBsUe7nqk_XS/view", // Replace with actual link
        codeLink: "" // Replace with actual link
    },
    {
        title: "Modelling the waters of Walsoorden",
        description: "Modelled the water levels of the Walsoorden area using the Python programming language.",
        tags: ["Grade: 7.5/10", "Python"],
        paperLink: "https://drive.google.com/file/d/1TQw9C-T4BvVM6TWpMmMROBagTlJeUqRB/view", // Replace with actual link
        codeLink: "" // Replace with actual link
    },
    {
        title: "Photography management system for Shotmaniacs",
        description: "Shotmaniacs is a photography company based in Enschede that specializes in photography for events. However, they required a system that facilitates their schedule and clients..",
        tags: ["REST", "Java"],
        paperLink: "", // Replace with actual link
        codeLink: "" // Replace with actual link
    },
    {
        title: "Reading a product's ingredients with a bar scanner",
        description: "Developed an application that queries the OpenFoodFact API and searches the ingredients of a product based on scanning its barcode..",
        tags: ["Raspberry Pi", "Java"],
        paperLink: "", // Replace with actual link
        codeLink: "" // Replace with actual link
    },
    {
        title: "Application system to automate a plant's watering schedule",
        description: "Developed an application that automates the process of watering plants by using a Raspberry Pi and a moisture sensor.",
        tags: ["Grade: 8/10"],
        paperLink: "", // Replace with actual link
        codeLink: "" // Replace with actual link
    },
    // Add more research items as needed
  ];

  return (
    <div className="research-list">
      {researchItems.map((item, index) => (
        <ResearchItem 
          key={index}
          title={item.title}
          description={item.description}
          tags={item.tags}
          paperLink={item.paperLink}
          codeLink={item.codeLink}
        />
      ))}
    </div>
  );
}

export default ResearchList;
