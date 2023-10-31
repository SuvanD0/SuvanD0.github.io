import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Resume from './Components/Resume.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import './App.css'; // Assuming you have an App.css for your styles

function App() {
  return (
    <Router>
      <div className="app-container">

        {/* Header */}
        <header className="app-header">
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Additional Routes can be added here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
