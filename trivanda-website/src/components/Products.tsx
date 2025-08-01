import React, { useEffect, useState, useRef } from 'react';
import { Package, Leaf, Star } from 'lucide-react';
import './Products.css';
import TuttiFruttiCarousel from './TuttiFruttiCarousel';
import PaperDishCarousel from './PaperDishCarousel';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true);
        setHasIntersected(true);
      }
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasIntersected, options]);

  return [ref, isIntersecting] as const;
};

const Products: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [heroRef, heroIntersecting] = useIntersectionObserver();
  const [tuttiFruttiRef, tuttiFruttiIntersecting] = useIntersectionObserver();
  const [paperDishRef, paperDishIntersecting] = useIntersectionObserver();
  const [futureProductsRef, futureProductsIntersecting] = useIntersectionObserver();
  const [qualityRef, qualityIntersecting] = useIntersectionObserver();
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace(/^#\/?/, ''); // removes "#/" or "#"
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }, []);

  return (
    <div className="products">
      <div className={`products-hero ${heroIntersecting ? 'animate-in' : ''}`} ref={heroRef}>
        <div className="container">
          <h1 className={`hero-title ${heroIntersecting ? 'title-animate' : ''}`}>Our Products</h1>
          <p className={`hero-description ${heroIntersecting ? 'description-animate' : ''}`}>Premium quality products for global markets</p>
        </div>
        {/* Animated background elements */}
        <div className="hero-bg-elements">
          <div className="hero-bg-shape hero-bg-shape-1"></div>
          <div className="hero-bg-shape hero-bg-shape-2"></div>
          <div className="hero-bg-shape hero-bg-shape-3"></div>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          {/* Tutti Frutti Section */}
          <section id="tutti-frutti" className={`product-section ${tuttiFruttiIntersecting ? 'animate-in' : ''}`} ref={tuttiFruttiRef}>
            <div className="product-content">
              <h2 className={`section-title ${tuttiFruttiIntersecting ? 'title-animate' : ''}`}>Tutti Frutti</h2>
              <p className={`section-description ${tuttiFruttiIntersecting ? 'description-animate' : ''}`}>
                Our signature Tutti Frutti product is a premium blend of carefully selected 
                dried fruits, perfect for health-conscious consumers worldwide. 
                Each batch is processed under strict quality control measures to ensure 
                the highest standards of taste and nutrition.
              </p>
              <div className={`product-features ${tuttiFruttiIntersecting ? 'features-animate' : ''}`}>
                <div className={`feature feature-animate ${tuttiFruttiIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                  <Star size={20} />
                  <span>Premium Quality Ingredients</span>
                </div>
                <div className={`feature feature-animate ${tuttiFruttiIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
                  <Package size={20} />
                  <span>International Packaging Standards</span>
                </div>
                <div className={`feature feature-animate ${tuttiFruttiIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
                  <Leaf size={20} />
                  <span>Natural & Preservative Free</span>
                </div>
              </div>
            </div>
            <div className={`product-image ${tuttiFruttiIntersecting ? 'image-animate' : ''}`}>
              <TuttiFruttiCarousel />
            </div>
            {/* Animated background elements */}
            <div className="section-bg-elements">
              <div className="section-bg-shape section-bg-shape-1"></div>
              <div className="section-bg-shape section-bg-shape-2"></div>
            </div>
          </section>

          {/* Paper Dish Section */}
          <section id="paper-dish" className={`product-section reverse ${paperDishIntersecting ? 'animate-in' : ''}`} ref={paperDishRef}>
            <div className="product-content">
              <h2 className={`section-title ${paperDishIntersecting ? 'title-animate' : ''}`}>Paper Dish</h2>
              <p className={`section-description ${paperDishIntersecting ? 'description-animate' : ''}`}>
                Smart, sustainable, and stylish—our premium paper dishes are crafted to meet modern needs with a touch of responsibility. Made from high-quality, food-grade materials, these disposable solutions are ideal for catering, events, takeaways, and everyday household use.
              </p>
              <div className={`product-features ${paperDishIntersecting ? 'features-animate' : ''}`}>
                <div className={`feature feature-animate ${paperDishIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                  <Leaf size={20} />
                  <span>Made for Modern Convenience</span>
                </div>
                <div className={`feature feature-animate ${paperDishIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
                  <Star size={20} />
                  <span>Sturdy & Reliable for Various Uses</span>
                </div>
                <div className={`feature feature-animate ${paperDishIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
                  <Package size={20} />
                  <span> Available in Multiple Sizes & Designs</span>
                </div>
              </div>
            </div>
            <div className={`product-image ${paperDishIntersecting ? 'image-animate' : ''}`}>
              <PaperDishCarousel />
            </div>
            {/* Animated background elements */}
            <div className="section-bg-elements">
              <div className="section-bg-shape section-bg-shape-1"></div>
              <div className="section-bg-shape section-bg-shape-2"></div>
            </div>
          </section>

          {/* Future Products Section */}
          <section id="future-products" className={`product-section ${futureProductsIntersecting ? 'animate-in' : ''}`} ref={futureProductsRef}>
            <div className="product-content">
              <h2 className={`section-title ${futureProductsIntersecting ? 'title-animate' : ''}`}>Future Products We're Preparing to Export</h2>
              <p className={`section-description ${futureProductsIntersecting ? 'description-animate' : ''}`}>
                We're constantly evolving and expanding our product portfolio to meet the diverse needs of our global partners. Here's a glimpse of what's next at Trivanda Internationals:
              </p>
              <div className={`future-products-grid ${futureProductsIntersecting ? 'grid-animate' : ''}`}>
                <div className={`future-product future-product-animate ${futureProductsIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                  <h4>🥣 Areca Palm Leaf Plates & Bowls</h4>
                  <p>Sustainable, elegant, and 100% compostable – our palm leaf tableware is nature's answer to disposable dining. Ideal for events, catering, and eco-conscious customers.</p>
                  <div className="future-product-meta">
                    <span className="future-status">Status: <b>Under Sourcing & Sample Testing</b></span><br/>
                    <span className="future-availability">Availability: <b>Coming Soon</b></span>
                  </div>
                </div>
                <div className={`future-product future-product-animate ${futureProductsIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
                  <h4>☕ Disposable Paper Cups & Containers</h4>
                  <p>Leak-proof, stackable, and ready for your brand. We're bringing eco-smart solutions to the beverage and takeaway industry with premium quality paper cups and food containers.</p>
                  <div className="future-product-meta">
                    <span className="future-status">Status: <b>Vendor Onboarding in Progress</b></span><br/>
                    <span className="future-availability">Availability: <b>Estimated Q4 2025</b></span>
                  </div>
                </div>
                <div className={`future-product future-product-animate ${futureProductsIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
                  <h4>🕯️ Incense Sticks & Dhoop Cones</h4>
                  <p>Rooted in Indian tradition, crafted with care. We're introducing premium incense sticks and cones made with natural ingredients – perfect for spiritual, wellness, and gifting markets.</p>
                  <div className="future-product-meta">
                    <span className="future-status">Status: <b>Sample Batch Ready</b></span><br/>
                    <span className="future-availability">Availability: <b>Export Trials Opening Soon</b></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Animated background elements */}
            <div className="section-bg-elements">
              <div className="section-bg-shape section-bg-shape-1"></div>
              <div className="section-bg-shape section-bg-shape-2"></div>
            </div>
          </section>

          {/* Quality Assurance */}
          <section className={`quality-section ${qualityIntersecting ? 'animate-in' : ''}`} ref={qualityRef}>
            <h2 className={`section-title ${qualityIntersecting ? 'title-animate' : ''}`}>Quality Assurance</h2>
            <div className={`quality-grid ${qualityIntersecting ? 'grid-animate' : ''}`}>
              {/* <div className="quality-item">
                <h4>ISO Certified</h4>
                <p>All our products meet international quality standards</p>
              </div> */}
              <div className={`quality-item quality-item-animate ${qualityIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                {/* <img src="/testing.jpg" alt="Traceability" style={{ width: '100%', maxWidth: 120, borderRadius: 8, margin: '0 auto 1rem auto', display: 'block' }} /> */}
                <img src={`${process.env.PUBLIC_URL}/testing.jpg`} alt="Traceability" style={{ width: '100%', maxWidth: 120, borderRadius: 8, margin: '0 auto 1rem auto', display: 'block' }} />
                
                <h4>Regular Testing</h4>
                <p>Comprehensive quality testing at every production stage</p>
              </div>
              <div className={`quality-item quality-item-animate ${qualityIntersecting ? 'item-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
                {/* <img src="/testing1.jpg" alt="Traceability" style={{ width: '100%', maxWidth: 120, borderRadius: 8, margin: '0 auto 1rem auto', display: 'block' }} /> */}
                <img src={`${process.env.PUBLIC_URL}/testing1.jpg`} alt="Traceability" style={{ width: '100%', maxWidth: 120, borderRadius: 8, margin: '0 auto 1rem auto', display: 'block' }} />

                <h4>Traceability</h4>
                <p>Complete product traceability from source to delivery</p>
              </div>
            </div>
            {/* Animated background elements */}
            <div className="section-bg-elements">
              <div className="section-bg-shape section-bg-shape-1"></div>
              <div className="section-bg-shape section-bg-shape-2"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products; 