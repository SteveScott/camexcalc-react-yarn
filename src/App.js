import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

// App Component with navigation
const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Privacy" element={<Privacy />} />
    </Routes>
  </Router>
);

export default App;
