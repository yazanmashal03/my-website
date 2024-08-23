import React from "react";
import profilePicture from "./assets/profile-picture.jpg";
import "./About.css"; // Create a CSS file specific for About page if needed

function About() {
  return (
    <section className="profile">
      <img 
        src={profilePicture} 
        alt="Yazan Mash'Al" 
        className="profile-picture"
      />
      <h1>Yazan Mash'Al</h1>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/yazan-mash-al-236a88220/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/yazanmashal03" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://medium.com/@YazanMashal" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-medium"></i>
        </a>
        <a href="https://www.kaggle.com/yazanmashal" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-kaggle"></i>
        </a>
        <a href="https://twitter.com/yazanmashal03" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>Hi, I'm Yazan!</p>
      <p className="about-text">
        I love the beauty of mathematics and exploring how it can be applied
        within technology and online products.
      </p>
      <p className="about-text">
        In addition to that, I'm also an aspiring scientist, who hopes to join a PhD program. My research interests revolve around AI/ML.
      </p>
      <p className="about-text">
        Besides technology, I'm also interested in finance & economy, fitness & health, psychology, and philosophy.
        In general, I strive to become the best version of myself and to keep learning about the complex mechanisms of our own nature and the world that surrounds us so that I can make my fair contribution to the improvement of the human experience.
      </p>
    </section>
  );
}

export default About;
