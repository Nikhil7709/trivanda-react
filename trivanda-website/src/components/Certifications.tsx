import React from 'react';
import { Award, CheckCircle, Shield, FileText } from 'lucide-react';
import './Certifications.css';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'GST Registration',
      description: 'Goods and Services Tax registration for legal compliance',
      icon: <FileText size={30} />
    },
    {
      name: 'IEC Code',
      description: 'Import Export Code for international trade operations',
      icon: <Shield size={30} />
    },
    {
      name: 'RCMC',
      description: 'Registration Cum Membership Certificate from export promotion council',
      icon: <Award size={30} />
    },
    {
      name: 'ISO Certification',
      description: 'International Organization for Standardization quality management',
      icon: <CheckCircle size={30} />
    }
  ];

  return (
    <div className="certifications">
      <div className="certifications-hero">
        <div className="container">
          <h1>Certifications & Compliance</h1>
          <p>Building trust through proper certifications and regulatory compliance</p>
        </div>
      </div>

      <div className="container">
        <section className="certs-section">
          <h2>Our Certifications</h2>
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">
                  {cert.icon}
                </div>
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="compliance-section">
          <h2>Quality & Compliance</h2>
          <div className="compliance-content">
            <div className="compliance-text">
              <h3>Why Certifications Matter</h3>
              <p>
                Our certifications ensure that we meet the highest standards of quality, 
                safety, and regulatory compliance. This gives our customers confidence 
                in our products and services, knowing that we operate within legal 
                frameworks and industry best practices.
              </p>
              <ul>
                <li>Legal compliance for international trade</li>
                <li>Quality assurance and control measures</li>
                <li>Transparent business practices</li>
                <li>Customer trust and confidence</li>
              </ul>
            </div>
            <div className="compliance-image">
              <div className="image-placeholder">
                <Award size={80} />
                <p>Certified Excellence</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications; 