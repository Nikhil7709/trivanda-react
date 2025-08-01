import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

// Modal component
const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  scrollPosition: number;
}> = ({ open, onClose, title, children, scrollPosition }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose} style={{ paddingTop: `${scrollPosition + 50}px` }}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  // Add state and handlers for modal
  const [modalType, setModalType] = useState<null | 'privacy' | 'terms'>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleOpenModal = (type: 'privacy' | 'terms') => {
    setScrollPosition(window.scrollY);
    setModalType(type);
  };
  const handleCloseModal = () => setModalType(null);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

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
              <a href="https://www.instagram.com/trivandainternationals?igsh=MTNkZnY2M2VqN29mbg==" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577773122669" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
              <li><Link to="/services" onClick={handleLinkClick}>Our Services</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products#tutti-frutti" onClick={handleLinkClick}>Tutti Frutti</Link></li>
              <li><Link to="/products#paper-dish" onClick={handleLinkClick}>Paper Dish</Link></li>
              <li><Link to="/products#future-products" onClick={handleLinkClick}>Future Products</Link></li>
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
            <button
              className="footer-link-btn"
              onClick={() => handleOpenModal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="footer-link-separator">|</span>
            <button
              className="footer-link-btn"
              onClick={() => handleOpenModal('terms')}
            >
              Terms of Service
            </button>
            </div>
        </div>
      </div>
      <Modal
        open={modalType === 'privacy'}
        onClose={handleCloseModal}
        title="Privacy Policy"
        scrollPosition={scrollPosition}
      >
        <div className="privacy-policy-content">
            <h3>Privacy Policy – Trivanda Internationals</h3>
            <p>
              <strong >Effective Date:</strong> 07/07/2025<br />
              <strong>Last Updated:</strong> 07/07/2025
            </p>
            <p>
              At Trivanda Internationals, we value your privacy. This policy explains how we collect, use, and protect your information when you interact with our website and services.
            </p>
            <p>
              <strong>Information We Collect</strong>
              <ul>
                <li>Personal details you provide, such as name, email, phone number, and address.</li>
                <li>Preferences for our services and products.</li>
                <li>Website usage data, including IP address, browser type, and pages visited (via cookies and analytics).</li>
              </ul>
            </p>
            <p>
              <strong>How We Use Your Data</strong>
              <ul>
                <li>To respond to your inquiries and provide requested services.</li>
                <li>To improve our website and offerings.</li>
                <li>To send updates or marketing communications (only if you opt-in).</li>
              </ul>
            </p>
            <p>
              <strong>Data Protection</strong><br />
              We use secure hosting and access controls to protect your information. However, no system is completely secure.
            </p>
            <p>
              <strong>Sharing Your Information</strong><br />
              We do not sell or trade your personal data. Information may be shared only with trusted third-party providers or authorities if required by law.
            </p>
            <p>
              <strong>Cookies</strong><br />
              We use cookies to enhance your experience. You can control or disable cookies in your browser settings.
            </p>
            <p>
              <strong>Your Rights</strong>
              <ul>
                <li>Request access, correction, or deletion of your data.</li>
                <li>Opt-out of marketing emails at any time.</li>
                <li>Contact us for privacy concerns: <a href="mailto:connect.trivanda@gmail.com">connect.trivanda@gmail.com</a></li>
              </ul>
            </p>
            <p>
              <strong>International Users</strong><br />
              By using our website from outside India, you consent to the transfer and processing of your data in India.
            </p>
            <p>
              <strong>Policy Updates</strong><br />
                    We may update this policy as needed. Changes will be posted here with a new effective date.
            </p>
          </div>
      </Modal>
      <Modal
        open={modalType === 'terms'}
        onClose={handleCloseModal}
        title="Terms of Service"
        scrollPosition={scrollPosition}
      >
        <div className="privacy-policy-content">

            <h3>Terms of Service – Trivanda Internationals</h3>
            <p>
              <strong >Effective Date:</strong> 07/07/2025<br />
              <strong>Last Updated:</strong> 07/07/2025
            </p>
            <p>
              By using our website or services, you agree to the following terms and conditions. If you do not agree, please do not use our services.
            </p>

            <p>
              <strong>Services Offered</strong>
              <ul>
                <b>We provide:</b>
                <li>Online Indian Bansuri training (1-on-1 or group)</li>
                <li>UI/UX design and branding</li>
                <li>Website development</li>
                <li>Product photography</li>
              </ul>
            </p>

            <p>
              <strong>User Conduct</strong>
              <ul>
                <b>You agree to:</b>
                <li>Provide accurate information</li>
                <li>Not misuse our content, services, or communication tools</li>
                <li>Respect intellectual property (all content on this site is owned by Trivanda Internationals)</li>
              </ul>
            </p>

            <p>
              <strong> Service Terms</strong>
              <ul>
                <li>All bookings (lessons, shoots, or design calls) are subject to availability</li>
                <li>Payment terms and project scopes will be defined per project</li>
                <li>Online lessons may be canceled/rescheduled with prior notice only</li>
              </ul>
            </p>

            <p>
              <strong> Intellectual Property </strong>
              <ul>
                All materials (photos, designs, text) are the property of Trivanda Internationals and cannot be reused or copied without written permission.
              </ul>
            </p>

            <p>
              <strong>Limitation of Liability</strong>
              <ul>
                We are not liable for:
                <li>Third-party service interruptions (e.g., Zoom, payment gateways)</li>
                <li>Technical errors or delays beyond our control</li>
                <li>Any losses resulting from reliance on our site content</li>
              </ul>
            </p>

            <p>
              <strong>Governing Law</strong>
              <ul>
                These terms shall be governed by the laws of India, and any disputes will be handled in the jurisdiction of Nashik, Maharashtra.
              </ul>
            </p>

            <p>
              <strong>Contact</strong>
              <ul>
                For any concerns, email us at: <a href="mailto:connect.trivanda@gmail.com">connect.trivanda@gmail.com</a>
              </ul>
            </p>

        </div>

       
      </Modal>
    </footer>
  );
};

export default Footer;
