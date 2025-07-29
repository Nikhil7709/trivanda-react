import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Markets from './components/Markets';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
    </div>
    </Router>
  );
}

export default App;
