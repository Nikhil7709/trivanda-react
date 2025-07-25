import React, { useEffect } from 'react';
import { Package, Leaf, Star } from 'lucide-react';
import './Products.css';

const Products: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="products">
      <div className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Premium quality products for global markets</p>
        </div>
      </div>

      <div className="container">
        {/* Tutti Frutti Section */}
        <section id="tutti-frutti" className="product-section">
          <div className="product-content">
            <h2>Tutti Frutti</h2>
            <p>
              Our signature Tutti Frutti product is a premium blend of carefully selected 
              dried fruits and nuts, perfect for health-conscious consumers worldwide. 
              Each batch is processed under strict quality control measures to ensure 
              the highest standards of taste and nutrition.
            </p>
            <div className="product-features">
              <div className="feature">
                <Star size={20} />
                <span>Premium Quality Ingredients</span>
              </div>
              <div className="feature">
                <Package size={20} />
                <span>International Packaging Standards</span>
              </div>
              <div className="feature">
                <Leaf size={20} />
                <span>Natural & Preservative Free</span>
              </div>
            </div>
          </div>
          <div className="product-image">
            <div className="image-placeholder">
              <Package size={80} />
              <p>Tutti Frutti</p>
            </div>
          </div>
        </section>

        {/* Paper Dish Section */}
        <section id="paper-dish" className="product-section reverse">
          <div className="product-content">
            <h2>Paper Dish</h2>
            <p>
              Environmentally friendly paper dish solutions that combine sustainability 
              with functionality. Our paper dishes are made from high-quality, 
              food-grade materials and are perfect for both commercial and household use.
            </p>
            <div className="product-features">
              <div className="feature">
                <Leaf size={20} />
                <span>Eco-Friendly Materials</span>
              </div>
              <div className="feature">
                <Star size={20} />
                <span>Food Grade Quality</span>
              </div>
              <div className="feature">
                <Package size={20} />
                <span>Multiple Sizes Available</span>
              </div>
            </div>
          </div>
          <div className="product-image">
            <div className="image-placeholder">
              <Leaf size={80} />
              <p>Paper Dish</p>
            </div>
          </div>
        </section>

        {/* Future Products Section */}
        <section id="future-products" className="product-section">
          <div className="product-content">
            <h2>Future Products</h2>
            <p>
              We are constantly innovating and expanding our product portfolio to meet 
              the evolving needs of our global customers. Our R&D team is working on 
              exciting new products that will be launched soon.
            </p>
            <div className="future-products-grid">
              <div className="future-product">
                <h4>Organic Food Products</h4>
                <p>Certified organic food items for health-conscious markets</p>
              </div>
              <div className="future-product">
                <h4>Sustainable Packaging</h4>
                <p>Advanced eco-friendly packaging solutions</p>
              </div>
              <div className="future-product">
                <img src="/areca-leaf.png" alt="Areca Palm Leaf Products" style={{ height: '100px', width: 'auto', objectFit: 'contain', borderRadius: '12px', marginBottom: '1rem', background: '#fff' }} />
                <h4>🥣 Areca Palm Leaf Plates & Bowls</h4>
                <p>Eco-friendly, biodegradable plates and bowls made from natural areca palm leaves</p>
              </div>
            </div>
          </div>
          <div className="product-image">
            <div className="image-placeholder">
              <Star size={80} />
              <p>Coming Soon</p>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="quality-section">
          <h2>Quality Assurance</h2>
          <div className="quality-grid">
            <div className="quality-item">
              <h4>ISO Certified</h4>
              <p>All our products meet international quality standards</p>
            </div>
            <div className="quality-item">
              <img src="/testing.jpg" alt="Regular Testing" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
              <h4>Regular Testing</h4>
              <p>Comprehensive quality testing at every production stage</p>
            </div>
            <div className="quality-item">
              <h4>Traceability</h4>
              <p>Complete product traceability from source to delivery</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products; 