import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Trivanda
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About Us
          </Link>
          
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${isActive('/products') ? 'active' : ''}`}
              onClick={toggleProducts}
            >
              Products <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`}>
              <Link to="/products#tutti-frutti" className="dropdown-item">Tutti Frutti</Link>
              <Link to="/products#paper-dish" className="dropdown-item">Paper Dish</Link>
              <Link to="/products#future-products" className="dropdown-item">Future Products</Link>
            </div>
          </div>
          
          <Link to="/markets" className={`nav-link ${isActive('/markets') ? 'active' : ''}`}>
            Markets
          </Link>
          <Link to="/certifications" className={`nav-link ${isActive('/certifications') ? 'active' : ''}`}>
            Certifications
          </Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
            Gallery
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact Us
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 