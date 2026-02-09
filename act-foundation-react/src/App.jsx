import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import HowWeWork from './pages/HowWeWork';
import Projects from './pages/Projects';
import CSR from './pages/CSR';
import Compliance from './pages/Compliance';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="projects" element={<Projects />} />
          <Route path="csr" element={<CSR />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
