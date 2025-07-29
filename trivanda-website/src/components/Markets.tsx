import React from 'react';
import { Globe, Truck, Ship, Plane, MapPin, Users, Award } from 'lucide-react';
import './Markets.css';

const Markets: React.FC = () => {
  const countries = [
    {
      name: 'United States',
      flag: '🇺🇸',
      description: 'North American market leader',
      region: 'North America'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      description: 'Quality-focused Canadian market',
      region: 'North America'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Premium European market',
      region: 'Europe'
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      description: 'High-standard German market',
      region: 'Europe'
    },
    {
      name: 'France',
      flag: '🇫🇷',
      description: 'Sophisticated French market',
      region: 'Europe'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      description: 'Pacific region hub',
      region: 'Oceania'
    },
    {
      name: 'Japan',
      flag: '🇯🇵',
      description: 'Quality-conscious Asian market',
      region: 'Asia'
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      description: 'Southeast Asian gateway',
      region: 'Asia'
    },
    {
      name: 'UAE',
      flag: '🇦🇪',
      description: 'Middle East trading hub',
      region: 'Middle East'
    },
    {
      name: 'South Africa',
      flag: '🇿🇦',
      description: 'African market leader',
      region: 'Africa'
    }
  ];

  return (
    <div className="markets">
      <div className="markets-hero">
        <div className="container">
          <h1>Global Markets</h1>
          <p>Exporting quality products worldwide with reliable logistics</p>
        </div>
      </div>

      <div className="container">
        <section className="countries-section">
          <h2>Countries We Export To</h2>
          <p className="section-description">
            We offer consistent quality, competitive pricing, and flexible shipment sizes to markets worldwide.
          </p>
          <div className="countries-grid">
            {countries.map((country, index) => (
              <div key={index} className="country-card">
                <div className="country-flag">{country.flag}</div>
                <div className="country-info">
                  <h3>{country.name}</h3>
                  <p>{country.description}</p>
                  <span className="region-badge">{country.region}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="countries-features">
            <span className="feature-badge">MOQ-friendly</span>
            <span className="feature-badge">Custom Documentation</span>
            <span className="feature-badge">Regulatory Compliance</span>
            <span className="feature-badge">Local Market Expertise</span>
          </div>
        </section>

        <section className="logistics-section">
          <h2>Logistics & Delivery</h2>
          <p className="section-description">
            Comprehensive shipping solutions tailored to your business needs with global reach and reliable delivery
          </p>
          <div className="logistics-grid">
            <div className="logistics-card">
              <div className="logistics-icon">
                <Ship size={48} />
              </div>
              <h3>🌊 Sea Freight</h3>
              <p>Cost-effective shipping for large volumes with reliable delivery times and flexible container options</p>
              <div className="logistics-features">
                <div className="feature-item">
                  <span className="feature-icon">📦</span>
                  <span>FCL & LCL options</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⏱️</span>
                  <span>15-30 days delivery</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💰</span>
                  <span>Cost-effective for bulk</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <span>Global port coverage</span>
                </div>
              </div>
              <div className="logistics-badge">
                <span>Best for: Large shipments, Cost optimization</span>
              </div>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">
                <Plane size={48} />
              </div>
              <h3>✈️ Air Freight</h3>
              <p>Express delivery for urgent shipments with worldwide coverage and door-to-door service</p>
              <div className="logistics-features">
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>Express & standard options</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>3-7 days delivery</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏠</span>
                  <span>Door-to-door service</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Real-time tracking</span>
                </div>
              </div>
              <div className="logistics-badge">
                <span>Best for: Urgent shipments, Time-sensitive goods</span>
              </div>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">
                <Truck size={48} />
              </div>
              <h3>🚛 Land Transport</h3>
              <p>Efficient ground transportation for regional deliveries with cross-border solutions</p>
              <div className="logistics-features">
                <div className="feature-item">
                  <span className="feature-icon">🛣️</span>
                  <span>Cross-border solutions</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📍</span>
                  <span>Real-time tracking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📅</span>
                  <span>Flexible scheduling</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔄</span>
                  <span>Multi-modal options</span>
                </div>
              </div>
              <div className="logistics-badge">
                <span>Best for: Regional deliveries, Cost efficiency</span>
              </div>
            </div>
          </div>
          <div className="logistics-features-overview">
            <span className="overview-badge">📋 Complete Documentation Support</span>
            <span className="overview-badge">🔒 Cargo Insurance Available</span>
            <span className="overview-badge">🌐 Global Network Partners</span>
            <span className="overview-badge">📞 24/7 Customer Support</span>
          </div>
        </section>

        <section className="export-services-section">
          <h2>Export Services</h2>
          <p className="section-description">
            Complete export support to ensure smooth international trade
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>
                <div className="service-icon">
                  <Award size={32} />
                </div>
                Quality Assurance
              </h3>
              <p>Pre-shipment inspection and quality certification</p>
            </div>
            <div className="service-card">
              <h3>
                <div className="service-icon">
                  <MapPin size={32} />
                </div>
                Documentation
              </h3>
              <p>Complete export documentation and customs clearance</p>
            </div>
            <div className="service-card">
              <h3>
                <div className="service-icon">
                  <Users size={32} />
                </div>
                Customer Support
              </h3>
              <p>Dedicated support team for smooth export process</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Markets; 