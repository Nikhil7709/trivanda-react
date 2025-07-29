import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Globe, Award, Users, CheckCircle, Package, Image, MessageCircle, Building2, Factory, FileText, Receipt, Landmark, Globe2, BarChart3, Apple } from 'lucide-react';
import './Home.css';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [heroRef, heroIntersecting] = useIntersectionObserver();
  const [aboutRef, aboutIntersecting] = useIntersectionObserver();
  const [productsRef, productsIntersecting] = useIntersectionObserver();
  const [globalRef, globalIntersecting] = useIntersectionObserver();
  const [whyChooseRef, whyChooseIntersecting] = useIntersectionObserver();
  const [certificationsRef, certificationsIntersecting] = useIntersectionObserver();
  const [contactRef, contactIntersecting] = useIntersectionObserver();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {showSplash && (
        <div className="splash-screen">
          {/* Animated Background Particles */}
          <div className="splash-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                '--delay': `${Math.random() * 2}s`,
                '--duration': `${2 + Math.random() * 3}s`,
                '--size': `${4 + Math.random() * 8}px`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`
              } as React.CSSProperties} />
            ))}
          </div>
          
          {/* Floating Geometric Shapes */}
          <div className="splash-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          
          {/* Main Content */}
          <div className="splash-content">
            <div className="splash-header">
              <div className="splash-welcome">
                <span className="splash-text-main">Welcome To</span>
                <div className="splash-line"></div>
              </div>
            </div>
            
            <div className="splash-logo-container">
              <div className="splash-logo-glow"></div>
              <img src="/Trivanda-Logo-without-bg.png" alt="Trivanda Internationals Logo" className="splash-logo" />
            </div>
            
            <div className="splash-subtitle">
              <span className="splash-tagline">Global Excellence • Indian Heritage</span>
              <div className="splash-loading">
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="loading-text">Loading Excellence...</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Progress Bar */}
          <div className="splash-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      )}
     {/* Hero Section */}
        <section className={`hero hero-bg ${heroIntersecting ? 'animate-in' : ''}`} ref={heroRef} style={{
          backgroundImage: 'url(/dock_yard.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="hero-content">
          <h1 className={`hero-title seo-headline ${heroIntersecting ? 'title-animate' : ''}`}>
           Trusted Indian Exporter of Tutti Frutti, Paper Products & More – Delivering Quality Globally
          </h1>
          <p className={`hero-subtitle ${heroIntersecting ? 'subtitle-animate' : ''}`}>
        Trivanda Internationals is a registered Indian export company, offering premium food and packaging products with global shipping, regulatory compliance, and customized B2B solutions.
          </p>
          <div className={`hero-buttons ${heroIntersecting ? 'buttons-animate' : ''}`}>
        <Link to="/contact" className="btn btn-primary hero-btn-animate" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          Request a Quote
        </Link>
        <Link to="/products" className="btn btn-secondary hero-btn-animate" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          Explore Products <ArrowRight size={20} />
        </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Fallback image if background fails */}
          <img
            src="/dock_yard.png"
            alt="Dock Yard"
            style={{
              display: 'none',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'block';
            }}
          />
        </div>

        {/* Animated background elements */}
        <div className="hero-bg-elements">
          <div className="hero-bg-shape hero-bg-shape-1"></div>
          <div className="hero-bg-shape hero-bg-shape-2"></div>
          <div className="hero-bg-shape hero-bg-shape-3"></div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className={`products-highlight ${productsIntersecting ? 'animate-in' : ''}`} ref={productsRef}>
        <div className="container">
          <h2 className={`products-title ${productsIntersecting ? 'title-animate' : ''}`}>Explore Our Top Export Products</h2>
          <p className={`products-subtitle ${productsIntersecting ? 'subtitle-animate' : ''}`} style={{color: 'black'}}>We offer consistent quality, competitive pricing, and flexible shipment sizes.</p>
          <div className={`products-grid ${productsIntersecting ? 'grid-animate' : ''}`}>
            <div className={`product-card product-card-animate ${productsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <div className="product-icon-container">
                <img src="/mixed-tutty-frutty1.jpg" alt="Tutti Frutti" className="product-icon-image" />
              </div>
              <h3>Tutti Frutti</h3>
              <p>Vibrant, high-quality candied fruit for baking & desserts</p>
            </div>
            <div className={`product-card product-card-animate ${productsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <div className="product-icon-container">
                <img src="/paper-dish-1.jpg" alt="Paper Dishes & Disposable Tableware" className="product-icon-image" />
              </div>
              <h3>Paper Dishes & Disposable Tableware</h3>
              <p>Eco-friendly, export-grade packaging solutions</p>
            </div>
          </div>
          <div className={`products-features ${productsIntersecting ? 'features-animate' : ''}`}>
            <span className="feature-badge feature-badge-animate" style={{ '--delay': '0.3s' } as React.CSSProperties}>MOQ-friendly</span>
            <span className="feature-badge feature-badge-animate" style={{ '--delay': '0.4s' } as React.CSSProperties}>Private Label Options</span>
            <span className="feature-badge feature-badge-animate" style={{ '--delay': '0.5s' } as React.CSSProperties}>Global Shipping Support</span>
            <span className="feature-badge feature-badge-animate" style={{ '--delay': '0.6s' } as React.CSSProperties}>Custom packaging & bulk deals for international buyers</span>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="products-bg-elements">
          <div className="product-bg-shape product-bg-shape-1"></div>
          <div className="product-bg-shape product-bg-shape-2"></div>
          <div className="product-bg-shape product-bg-shape-3"></div>
        </div>
      </section>

      {/* Global Presence */}
      <section className={`global-presence ${globalIntersecting ? 'animate-in' : ''}`} ref={globalRef}>
        <div className="container">
          <h2 className={`global-title ${globalIntersecting ? 'title-animate' : ''}`}>Where We Export</h2>
          <p className={`global-subtitle ${globalIntersecting ? 'subtitle-animate' : ''}`} style={{color: 'black'}}>We currently serve international buyers from:</p>
          <div className={`countries-grid ${globalIntersecting ? 'grid-animate' : ''}`}>
            <div className={`country-card country-card-animate ${globalIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <div className="country-flag-container">
                <div className="country-flag">
                  <img src="/canada.png" alt="Canada Flag" className="country-flag-image" />
                </div>
              </div>
              <div className="country-info">
                <h3>Canada</h3>
                <p>North American market</p>
              </div>
            </div>
            <div className={`country-card country-card-animate ${globalIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <div className="country-flag-container">
                <div className="country-flag">
                  <img src="/UAE.png" alt="UAE Flag" className="country-flag-image" />
                </div>
              </div>
              <div className="country-info">
                <h3>UAE</h3>
                <p>Middle East hub</p>
              </div>
            </div>
            <div className={`country-card country-card-animate ${globalIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
              <div className="country-flag-container">
                <div className="country-flag">
                  <img src="/UK.png" alt="UK Flag" className="country-flag-image" />
                </div>
              </div>
              <div className="country-info">
                <h3>UK</h3>
                <p>European market</p>
              </div>
            </div>
            <div className={`country-card country-card-animate ${globalIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.4s' } as React.CSSProperties}>
              <div className="country-flag-container">
                <div className="country-flag">
                  <img src="/USA.png" alt="USA Flag" className="country-flag-image" />
                </div>
              </div>
              <div className="country-info">
                <h3>USA</h3>
                <p>North American market</p>
              </div>
            </div>
            <div className={`country-card country-card-animate ${globalIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.5s' } as React.CSSProperties}>
              <div className="country-flag-container">
                <div className="country-flag">
                  <img src="/Africa.png" alt="Africa Flag" className="country-flag-image" />
                </div>
              </div>
              <div className="country-info">
                <h3>Africa</h3>
                <p>Emerging markets</p>
              </div>
            </div>
          </div>
          <div className={`logistics-info ${globalIntersecting ? 'logistics-animate' : ''}`}>
              <span style={{color: 'black'}}>Flexible Logistics: Sea freight & Air cargo | Small trial orders accepted | Long-term B2B partnerships preferred</span>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="global-bg-elements">
          <div className="global-bg-shape global-bg-shape-1"></div>
          <div className="global-bg-shape global-bg-shape-2"></div>
          <div className="global-bg-shape global-bg-shape-3"></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`why-choose ${whyChooseIntersecting ? 'animate-in' : ''}`} ref={whyChooseRef}>
        <div className="container">
          <h2 className={`why-title ${whyChooseIntersecting ? 'title-animate' : ''}`}>Why Choose Trivanda Internationals?</h2>
          <div className={`why-grid ${whyChooseIntersecting ? 'grid-animate' : ''}`}>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <Award size={32} />
              </div>
              <span>Strong supplier network with QC checks</span>
            </div>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <CheckCircle size={32} />
              </div>
              <span>100% legal compliance with Indian EXIM norms</span>
            </div>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <Phone size={32} />
              </div>
              <span>Dedicated buyer support & fast communication</span>
            </div>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.4s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <Globe size={32} />
              </div>
              <span>Growth-Focused partnership approach</span>
            </div>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.5s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <Users size={32} />
              </div>
              <span>We Build Relations</span>
            </div>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.6s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <CheckCircle size={32} />
              </div>
              <span>We Deliver On Time</span>
            </div>
            <div className={`why-card why-card-animate ${whyChooseIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.7s' } as React.CSSProperties}>
              <div className="why-icon-container">
                <div className="why-icon-bg"></div>
                <Package size={32} />
              </div>
              <span>Price Benefit</span>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="why-bg-elements">
          <div className="why-bg-shape why-bg-shape-1"></div>
          <div className="why-bg-shape why-bg-shape-2"></div>
          <div className="why-bg-shape why-bg-shape-3"></div>
        </div>
      </section>

      {/* Membership and Certifications */}
      <section className={`certifications ${certificationsIntersecting ? 'animate-in' : ''}`} ref={certificationsRef}>
        <div className="container">
          <h2 className={`certifications-title ${certificationsIntersecting ? 'title-animate' : ''}`}>Membership and Certifications</h2>
          <p className={`certifications-description ${certificationsIntersecting ? 'description-animate' : ''}`} style={{color: 'black'}}>Registered and certified under various government and industry bodies</p>
          <div className={`certifications-grid ${certificationsIntersecting ? 'grid-animate' : ''}`}>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/MSME-logo.png" alt="MSME" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>MSME</span>
            </div>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/udhyog-aadhar.jpg" alt="Udyog Adhar" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>Udyog Adhar</span>
            </div>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/GST.png" alt="GST" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>GST</span>
            </div>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.4s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/ficci-logo.png" alt="FICCI" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>FICCI</span>
            </div>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.5s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/FIEO.png" alt="FIEO" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>FIEO</span>
            </div>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.6s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/dgft.png" alt="DGFT" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>DGFT</span>
            </div>
            <div className={`certification-card certification-card-animate ${certificationsIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.7s' } as React.CSSProperties}>
              <div className="certification-icon"><img src="/APEDA-logo.png" alt="APEDA" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 4, background: '#fff' }} /></div>
              <span>APEDA</span>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="certifications-bg-elements">
          <div className="certifications-bg-shape certifications-bg-shape-1"></div>
          <div className="certifications-bg-shape certifications-bg-shape-2"></div>
          <div className="certifications-bg-shape certifications-bg-shape-3"></div>
        </div>
      </section>

      {/* Gallery Sneak Peek */}
      {/* <section className="gallery-sneak">
        <div className="container">
          <h2>Gallery Sneak Peek</h2>
          <div className="gallery-carousel"> */}
            {/* Replace with real carousel/images */}
            {/* <div className="gallery-img-placeholder"><Image size={60} /> Product Shot</div>
            <div className="gallery-img-placeholder"><Image size={60} /> Container Photo</div>
            <div className="gallery-img-placeholder"><Image size={60} /> Packaging Line</div>
          </div>
        </div>
      </section> */}

      {/* Contact Block */}
      <section className={`contact-block ${contactIntersecting ? 'animate-in' : ''}`} ref={contactRef}>
        <div className="container">
          <h2 className={`contact-title ${contactIntersecting ? 'title-animate' : ''}`}>Let's Export Together</h2>
          <p className={`contact-description ${contactIntersecting ? 'description-animate' : ''}`}>Ready to source high-quality Indian products? Let's build a sustainable export partnership.</p>
          <div className={`contact-info-block ${contactIntersecting ? 'info-animate' : ''}`}>
            <div className={`contact-card contact-card-animate ${contactIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <div className="contact-icon"><Mail size={32} /></div>
              <div className="contact-details">
                <span className="contact-label">Email Us</span>
                <a href="mailto:trivanda.contact@gmail.com" className="contact-value">trivanda.contact@gmail.com</a>
              </div>
            </div>
            <div className={`contact-card contact-card-animate ${contactIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <div className="contact-icon"><Phone size={32} /></div>
              <div className="contact-details">
                <span className="contact-label">Call / WhatsApp</span>
                <a href="tel:+919225101364" className="contact-value">+91-9225101364</a>
              </div>
            </div>
            <div className={`contact-card contact-card-animate ${contactIntersecting ? 'card-animate' : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
              <div className="contact-icon"><Globe size={32} /></div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">Nashik, Maharashtra, India</span>
              </div>
            </div>
          </div>
          <div className={`contact-buttons ${contactIntersecting ? 'buttons-animate' : ''}`}>
            <Link to="/contact" className="btn btn-primary contact-btn-animate" style={{ '--delay': '0.4s' } as React.CSSProperties}>Contact Us</Link>
            <Link to="/contact" className="btn btn-secondary contact-btn-animate" style={{ '--delay': '0.5s' } as React.CSSProperties}>Get a Quote</Link>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="contact-bg-elements">
          <div className="contact-bg-shape contact-bg-shape-1"></div>
          <div className="contact-bg-shape contact-bg-shape-2"></div>
          <div className="contact-bg-shape contact-bg-shape-3"></div>
        </div>
      </section>
    </div>
  );
};

export default Home; 