import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Wrap route elements in Routes component */}
        <Routes>
          {/* Default route for home page */}
          <Route path="/" element={<Home />} />
          {/* default route for home when viewed on deployed GitHub Pages site */}
          {/* <Route path="/portfolio" element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
