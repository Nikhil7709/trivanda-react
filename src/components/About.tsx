import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About Trivanda</h1>
          <p>Building global partnerships through quality and trust</p>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Founded with a vision to bridge global markets with premium quality products, Trivanda has grown from a small startup to a trusted international trading partner.</p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <Users size={60} />
              <p>Our Team</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>To provide high-quality products and exceptional service to our global customers.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Heart size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>To become the leading global trading partner, known for reliability and innovation.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>Quality</h4>
              <p>We never compromise on quality standards, ensuring every product meets international requirements.</p>
            </div>
            <div className="value-card">
              <h4>Integrity</h4>
              <p>Honest and transparent business practices form the foundation of all our relationships.</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>We continuously seek new ways to improve our products and services for better customer satisfaction.</p>
            </div>
            <div className="value-card">
              <h4>Reliability</h4>
              <p>Our customers can count on us for consistent delivery and dependable service.</p>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="credentials-section">
          <h2>Our Credentials</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <div className="credential-icon">
                <Award size={30} />
              </div>
              <div className="credential-content">
                <h4>Years of Experience</h4>
                <p>Over 10+ years in international trade and export</p>
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-icon">
                <Users size={30} />
              </div>
              <div className="credential-content">
                <h4>Global Reach</h4>
                <p>Serving customers across 15+ countries worldwide</p>
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-icon">
                <Target size={30} />
              </div>
              <div className="credential-content">
                <h4>Quality Certifications</h4>
                <p>ISO certified processes and quality management systems</p>
              </div>
            </div>
            <div className="credential-item">
              <div className="credential-icon">
                <Heart size={30} />
              </div>
              <div className="credential-content">
                <h4>Customer Satisfaction</h4>
                <p>98% customer satisfaction rate with repeat business</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 