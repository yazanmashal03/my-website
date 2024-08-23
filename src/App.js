import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About'; // Import the About component
import ProjectList from './ProjectList'; // Import the ProjectList component
import ResearchList from './ResearchList'; // Import the ResearchList component

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/my-website">ABOUT ME</Link></li>
              <li><a href="https://drive.google.com/file/d/1Mlfr_KbL_AD4qZYiWwb69sluDAbD1dKB/view" target="_blank" rel="noopener noreferrer">CV</a></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/research">RESEARCH</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/research" element={<ResearchList />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
