import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

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

const Contact: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroIntersecting } = useIntersectionObserver();
  const { ref: contentRef, isIntersecting: contentIntersecting } = useIntersectionObserver();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      <div className={`contact-hero ${heroIntersecting ? 'animate-in' : ''}`} ref={heroRef}>
        <div className="container">
          <h1 className={`hero-title ${heroIntersecting ? 'title-animate' : ''}`} style={{ color: 'white' }}>Contact Us</h1>
          <p className={`hero-description ${heroIntersecting ? 'description-animate' : ''}`}>Get in touch with us for any inquiries or business opportunities</p>
        </div>
        <div className="hero-bg-elements">
          <div className="hero-bg-shape hero-bg-shape-1"></div>
          <div className="hero-bg-shape hero-bg-shape-2"></div>
          <div className="hero-bg-shape hero-bg-shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className={`contact-content ${contentIntersecting ? 'animate-in' : ''}`} ref={contentRef}>
          <div className="contact-info card">
            <h2 className={`contact-info-title ${contentIntersecting ? 'title-animate' : ''}`}>Get In Touch</h2>
            <p className={`contact-subtitle ${contentIntersecting ? 'subtitle-animate' : ''}`}>Reach out for business, support, or partnership opportunities. Our team responds within 24 hours.</p>
            <div className={`contact-methods ${contentIntersecting ? 'methods-animate' : ''}`}>
              <div className="contact-method">
                <div className="method-icon" aria-label="Email">
                  <Mail size={22} />
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p><a href="mailto:trivanda.contact@gmail.com" className="contact-link" aria-label="Email trivanda.contact@gmail.com">trivanda.contact@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon" aria-label="Phone">
                  <Phone size={22} />
                </div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <p><a href="tel:+919225101364" className="contact-link" aria-label="Call +91 9225101364">+91 9225101364</a></p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon" aria-label="Address">
                  <MapPin size={22} />
                </div>
                <div className="method-content">
                  <h4>Address</h4>
                  <p>Nashik, Maharashtra, India</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon" aria-label="WhatsApp">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="method-content">
                  <h4>WhatsApp</h4>
                  <p><a href="https://wa.me/919225101364" className="contact-link whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +91 9225101364">+91 9225101364</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={`divider-desktop ${contentIntersecting ? 'divider-animate' : ''}`} />
          <div className="contact-form">
            <h3 className={`form-title ${contentIntersecting ? 'title-animate' : ''}`}>Send us a Message</h3>
            <p className={`form-subtitle ${contentIntersecting ? 'subtitle-animate' : ''}`}>Fill out the form and our team will get back to you promptly.</p>
            <form onSubmit={handleSubmit} className={`contact-form-content ${contentIntersecting ? 'form-animate' : ''}`}>
              <div className="form-group">
                <div className="input-icon"><svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                />
              </div>
              <div className="form-group">
                <div className="input-icon"><svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg></div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                />
              </div>
              <div className="form-group">
                <div className="input-icon"><svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg></div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <div className="input-icon"><svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><polyline points="17 8 12 13 7 8"/></svg></div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message *"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-bg-elements">
            <div className="contact-bg-shape contact-bg-shape-1"></div>
            <div className="contact-bg-shape contact-bg-shape-2"></div>
            <div className="contact-bg-shape contact-bg-shape-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 