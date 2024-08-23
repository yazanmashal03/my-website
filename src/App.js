import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#cv">CV</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#research">RESEARCH</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="profile">
          <img 
            src="your-profile-picture-url-here.jpg" 
            alt="Yazan Mash'Al" 
            className="profile-picture"
          />
          <h1>Yazan Mash'Al</h1>
          <div className="social-icons">
            <a href="https://linkedin.com/in/your-profile" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/your-profile" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@your-profile" className="social-icon">
              <i className="fab fa-medium"></i>
            </a>
            <a href="https://www.kaggle.com/your-profile" className="social-icon">
              <i className="fab fa-kaggle"></i>
            </a>
            <a href="https://twitter.com/your-profile" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p>Hi, I'm Yazan!</p>
          <p>
            I love the beauty of mathematics and exploring how it can be applied
            within technology and online products.
          </p>
          <p>
            In addition to that, I'm also an aspiring scientist, who hopes to join a PhD program. My research interests revolve around AI/ML.
          </p>
          <p>
            Besides technology, I'm also interested in finance & economy, fitness & health, psychology, and philosophy.
            In general, I strive to become the best version of myself and to keep learning about the complex mechanisms of our own nature and the world that surrounds us so that I can make my fair contribution to the improvement of the human experience.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
