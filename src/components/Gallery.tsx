import React, { useState } from 'react';
import { Image, Video, Factory, Package } from 'lucide-react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    { id: 1, category: 'factory', title: 'Factory Overview', icon: <Factory size={40} /> },
    { id: 2, category: 'products', title: 'Product Showcase', icon: <Package size={40} /> },
    { id: 3, category: 'packaging', title: 'Packaging Process', icon: <Package size={40} /> },
    { id: 4, category: 'factory', title: 'Production Line', icon: <Factory size={40} /> },
    { id: 5, category: 'products', title: 'Quality Control', icon: <Image size={40} /> },
    { id: 6, category: 'packaging', title: 'Final Packaging', icon: <Package size={40} /> }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="gallery">
      <div className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our factory, products, and packaging through photos and videos</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab ${activeTab === 'factory' ? 'active' : ''}`}
            onClick={() => setActiveTab('factory')}
          >
            Factory
          </button>
          <button 
            className={`tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            className={`tab ${activeTab === 'packaging' ? 'active' : ''}`}
            onClick={() => setActiveTab('packaging')}
          >
            Packaging
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-placeholder">
                {item.icon}
                <h4>{item.title}</h4>
                <p>Click to view</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-info">
          <h2>Visual Experience</h2>
          <p>
            Our gallery showcases the complete journey of our products from production 
            to packaging. Each image and video represents our commitment to quality 
            and transparency in our operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 