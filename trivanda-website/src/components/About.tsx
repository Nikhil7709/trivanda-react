import React, { useRef, useEffect, useState } from 'react';
import { Target, Heart, Award, Users, Globe, TrendingUp, Shield, Star } from 'lucide-react';
import './About.css';
import { color } from 'framer-motion';

// Custom intersection observer hook
const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return { ref, isIntersecting };
};

const About: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroIntersecting } = useIntersectionObserver();
  const { ref: storyRef, isIntersecting: storyIntersecting } = useIntersectionObserver();
  const { ref: missionRef, isIntersecting: missionIntersecting } = useIntersectionObserver();
  const { ref: credentialsRef, isIntersecting: credentialsIntersecting } = useIntersectionObserver();

  return (
    <div className="about">
      <div className={`about-hero ${heroIntersecting ? 'animate-in' : ''}`} ref={heroRef}>
        <div className="container">
          <h1 className={`hero-title ${heroIntersecting ? 'title-animate' : ''}`} style={{ color: 'white' }}>About Trivanda Internationals – Your Trusted Export Partner from India</h1>
        </div>
        <div className="hero-bg-elements">
          <div className="hero-bg-shape hero-bg-shape-1"></div>
          <div className="hero-bg-shape hero-bg-shape-2"></div>
          <div className="hero-bg-shape hero-bg-shape-3"></div>
        </div>
      </div>

      <div className="container">
        <section className={`story-section ${storyIntersecting ? 'animate-in' : ''}`} ref={storyRef}>
          <div className="story-content">
            <h2 className={`story-title ${storyIntersecting ? 'title-animate' : ''}`}>Our Story</h2>
            <p className={`story-description ${storyIntersecting ? 'description-animate' : ''}`} style={{textAlign: 'left'}}>
              Trivanda Internationals was born from a simple but powerful vision — to showcase the richness of Indian-made products on the global stage with uncompromising quality and ethical practices.<br /><br />
              Founded in 2025 in Nashik, Maharashtra, our journey started with a deep belief in India's manufacturing strength and a mission to bridge Indian products with international markets that value authenticity, affordability, and reliability.<br /><br />
              Whether it's the vibrant sweetness of Tutti Frutti or the eco-conscious utility of Paper Dishes, we strive to ensure every container we ship carries our promise of quality, compliance, and care.
            </p>
          </div>
          <div className={`story-image ${storyIntersecting ? 'image-animate' : ''}`}>
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/world_map.png`} alt="World Map" style={{ width: '100%', maxWidth: '340px', height: 'auto', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }} />
            </div>
          </div>
          <div className="story-bg-elements">
            <div className="story-bg-shape story-bg-shape-1"></div>
            <div className="story-bg-shape story-bg-shape-2"></div>
          </div>
        </section>

        <section className={`mission-section ${missionIntersecting ? 'animate-in' : ''}`} ref={missionRef}>
          <div className="mission-header">
            <h2 className={`mission-title ${missionIntersecting ? 'title-animate' : ''}`}>Our Core Values</h2>
            <p className={`mission-subtitle ${missionIntersecting ? 'subtitle-animate' : ''}`}>Driving excellence through purpose and vision</p>
          </div>
          <div className={`mission-grid ${missionIntersecting ? 'grid-animate' : ''}`}>
            <div className="mission-card">
              <div className="mission-icon">
                <Target size={48} />
              </div>
              <h3>Our Mission</h3>
              <p style={{textAlign: 'left'}}>
                To build long-term, trust-based relationships with global buyers by delivering top-quality Indian products that meet international standards — on time, every time.
              </p>
              <div className="mission-features">
                <div className="feature-item">
                  <Shield size={20} />
                  <span>Quality Assurance</span>
                </div>
                <div className="feature-item">
                  <Users size={20} />
                  <span>Trust-Based Relationships</span>
                </div>
                <div className="feature-item">
                  <Award size={20} />
                  <span>International Standards</span>
                </div>
              </div>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Globe size={48} />
              </div>
              <h3>Our Vision</h3>
              <p style={{textAlign: 'left'}}>
                To become one of India's most respected export companies, known for ethical business, transparent practices, and sustainable product offerings — reaching 2–4 containers per month by 2026 and beyond.
              </p>
              <div className="mission-features">
                <div className="feature-item">
                  <Star size={20} />
                  <span>Industry Leadership</span>
                </div>
                <div className="feature-item">
                  <TrendingUp size={20} />
                  <span>Sustainable Growth</span>
                </div>
                <div className="feature-item">
                  <Heart size={20} />
                  <span>Ethical Excellence</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mission-bg-elements">
            <div className="mission-bg-shape mission-bg-shape-1"></div>
            <div className="mission-bg-shape mission-bg-shape-2"></div>
          </div>
        </section>

        <section className={`credentials-section ${credentialsIntersecting ? 'animate-in' : ''}`} ref={credentialsRef}>
          <h2 className={`credentials-title ${credentialsIntersecting ? 'title-animate' : ''}`}>Our Legal Registrations</h2>
          <p className={`credentials-description ${credentialsIntersecting ? 'description-animate' : ''}`} style={{textAlign: 'left'}}>
            We are a fully government-compliant company with all necessary certifications to export worldwide:
          </p>
          <ul className={`about-legal-list ${credentialsIntersecting ? 'list-animate' : ''}`} style={{marginBottom: '1.5rem', textAlign: 'left'}}>
            <li>IEC (Import Export Code)</li>
            <li>GST Registered</li>
            <li>MSME Udyam Registration</li>
            <li>RCMC – SEPC Membership</li>
            <li>Shop Act Registration</li>
          </ul>
          <p className={`credentials-conclusion ${credentialsIntersecting ? 'conclusion-animate' : ''}`} style={{textAlign: 'left'}}>
            These credentials reflect our dedication to professional trade practices and lawful global transactions.
          </p>
          <div className="credentials-bg-elements">
            <div className="credentials-bg-shape credentials-bg-shape-1"></div>
            <div className="credentials-bg-shape credentials-bg-shape-2"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 