import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap route elements in Routes component */}
        <Routes>
          {/* Default route for home page */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
