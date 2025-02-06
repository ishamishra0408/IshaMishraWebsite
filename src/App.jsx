import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="p-4 shadow-md bg-white flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Isha Mishra Pathak</h1>
          <div className="space-x-4">
            <Link className="text-gray-700 hover:text-indigo-500 transition" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-indigo-500 transition" to="/experience">Experience</Link>
            <Link className="text-gray-700 hover:text-indigo-500 transition" to="/projects">Projects</Link>
            <Link className="text-gray-700 hover:text-indigo-500 transition" to="/contact">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="p-4 bg-white text-center text-gray-600">
          &copy; 2025 Isha Mishra Pathak. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
