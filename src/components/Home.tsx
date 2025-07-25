import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Users } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Trivanda</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted partner in premium food products and sustainable packaging solutions
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <Globe size={80} />
            <p>Global Excellence</p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="overview">
        <div className="container">
          <h2>Why Choose Trivanda?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={40} />
              </div>
              <h3>Quality Certified</h3>
              <p>All our products meet international quality standards with proper certifications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={40} />
              </div>
              <h3>Global Reach</h3>
              <p>Exporting to multiple countries with reliable logistics and delivery</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Customer Focus</h3>
              <p>Dedicated support team ensuring your satisfaction and success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner with Us?</h2>
            <p>Join hundreds of satisfied customers worldwide who trust Trivanda for their business needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Journey
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showSplash && (
        <div className="splash-screen">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="splash-text">Welcome To</span>
            <video
              src="/trivanda-launch.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '320px', maxWidth: '90vw', borderRadius: '18px', margin: '1.2rem 0', boxShadow: '0 4px 32px rgba(0,0,0,0.18)' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 