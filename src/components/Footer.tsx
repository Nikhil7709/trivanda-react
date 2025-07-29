import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Trivanda Internationals</h3>
            <p>
              Your trusted partner in premium food products and sustainable 
              packaging solutions for global markets.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products#tutti-frutti">Tutti Frutti</Link></li>
              <li><Link to="/products#paper-dish">Paper Dish</Link></li>
              <li><Link to="/products#future-products">Future Products</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Nashik, Maharashtra, India</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91-9225101364</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>trivanda.contact@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Trivanda Internationals. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link-btn">Privacy Policy</button>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 