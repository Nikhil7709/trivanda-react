import React from 'react';
import { Globe, Truck, Ship, Plane } from 'lucide-react';
import './Markets.css';

const Markets: React.FC = () => {
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
    'Australia', 'Japan', 'Singapore', 'UAE', 'South Africa'
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
          <div className="countries-grid">
            {countries.map((country, index) => (
              <div key={index} className="country-card">
                <Globe size={24} />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="logistics-section">
          <h2>Logistics & Delivery</h2>
          <div className="logistics-grid">
            <div className="logistics-card">
              <div className="logistics-icon">
                <Ship size={40} />
              </div>
              <h3>Sea Freight</h3>
              <p>Cost-effective shipping for large volumes with reliable delivery times</p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">
                <Plane size={40} />
              </div>
              <h3>Air Freight</h3>
              <p>Express delivery for urgent shipments with worldwide coverage</p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">
                <Truck size={40} />
              </div>
              <h3>Land Transport</h3>
              <p>Efficient ground transportation for regional deliveries</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Markets; 