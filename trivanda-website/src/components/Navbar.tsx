import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  // Add a transition trigger
  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    // Close mobile menu
    setIsOpen(false);
    document.body.classList.add('page-transition');
    setTimeout(() => {
      navigate(path);
      document.body.classList.remove('page-transition');
    }, 200); // 200ms for fade/slide effect
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-container">
            <img src="/Trivanda-Logo-without-bg.png" alt="Trivanda Logo" className="logo-image" />
            <div className="company-name">
              <span className="company-primary">Trivanda</span>
              <span className="company-secondary">Internationals</span>
            </div>
          </div>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleNavClick('/')}>Home</Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`} onClick={handleNavClick('/products')}>Products</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={handleNavClick('/services')}>Our Services</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleNavClick('/about')}>About Us</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleNavClick('/contact')}>Contact Us</Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 