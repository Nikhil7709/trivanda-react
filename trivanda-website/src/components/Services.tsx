import React, { useState, useEffect, useRef } from 'react';
import { Music, Heart, Globe, Users, X, Palette, Eye, Target, Code, Zap, Shield, Camera, Image, Sparkles, Star, CheckCircle, ArrowRight, Play, Award, TrendingUp, Clock, MapPin, Phone, Mail } from 'lucide-react';
import './Services.css';

// Custom hook for counting animation
const useCountAnimation = (endValue: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime - delay;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(endValue * easeOutQuart);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };
          
          if (delay > 0) {
            setTimeout(animate, delay);
          } else {
            animate();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, delay, isVisible]);

  return { count, ref };
};

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

// Animated Stat Item Component
interface AnimatedStatItemProps {
  value: number;
  suffix: string;
  label: string;
  duration: number;
  delay: number;
}

const AnimatedStatItem: React.FC<AnimatedStatItemProps> = ({ value, suffix, label, duration, delay }) => {
  const { count, ref } = useCountAnimation(value, duration, delay);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    if (count > 0 && count < value) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
    if (count === value && !isCompleted) {
      setIsCompleted(true);
      setTimeout(() => setIsCompleted(false), 1000);
    }
  }, [count, value, isCompleted]);
  
  return (
    <div className="stat-item">
      <div 
        className={`stat-number ${isAnimating ? 'animating' : ''} ${isCompleted ? 'completed' : ''}`} 
        ref={ref}
      >
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'flute' | 'design' | 'website' | 'photography'>('flute');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [formData, setFormData] = useState({
    // Flute form data
    skillLevel: '',
    lessonType: [] as string[],
    learningMode: '',
    ageGroup: '',
    startTime: '',
    hasFlute: '',
    heardFrom: [] as string[],
    // Design form data
    interest: '',
    name: '',
    email: '',
    whatsapp: '',
    goal: '',
    source: '',
    experienceLevel: '',
    trainingType: '',
    projectType: [] as string[],
    timeline: '',
    budget: '',
    // Website form data
    businessType: '',
    websiteGoal: '',
    features: '',
    websiteBudget: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    // Photography form data
    productType: '',
    quantity: '',
    location: '',
    photographyWhatsapp: '',
    photographyEmail: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, name } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...(prev[name as keyof typeof prev] as string[] || []), value]
        : (prev[name as keyof typeof prev] as string[] || []).filter(item => item !== value)
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    if (modalType === 'flute') {
      alert('Thank you for your interest! We will contact you soon to schedule your guided bansuri intro session.');
      setFormData(prev => ({ 
        ...prev, 
        skillLevel: '', 
        lessonType: [], 
        learningMode: '', 
        ageGroup: '', 
        startTime: '', 
        hasFlute: '', 
        heardFrom: [] 
      }));
    } else if (modalType === 'design') {
      alert('Thank you for your project details! We will send you a comprehensive UI/UX design proposal within 24 hours.');
      setFormData(prev => ({ 
        ...prev, 
        interest: '',
        name: '', 
        email: '', 
        whatsapp: '',
        goal: '',
        source: '',
        experienceLevel: '',
        trainingType: '',
        projectType: [], 
        timeline: '', 
        budget: '' 
      }));
    } else if (modalType === 'website') {
      alert('Thank you for your website project details! We will send you a customized website proposal and schedule a consultation call within 24 hours.');
      setFormData(prev => ({ 
        ...prev, 
        businessType: '',
        websiteGoal: '',
        features: '',
        websiteBudget: '',
        contactName: '',
        contactEmail: '',
        contactPhone: ''
      }));
    } else {
      alert('Thank you for your photography inquiry! We will send you our photography packages and pricing details within 24 hours.');
      setFormData(prev => ({ 
        ...prev, 
        productType: '',
        quantity: '',
        location: '',
        photographyWhatsapp: '',
        photographyEmail: ''
      }));
    }
    setShowModal(false);
  };

  const openModal = (type: 'flute' | 'design' | 'website' | 'photography') => {
    setScrollPosition(window.scrollY);
    setModalType(type);
    setShowModal(true);
  };

  const handleScheduleCall = () => {
    // You can replace this with actual phone number or scheduling link
    window.open('tel:+919876543210', '_self');
  };

  const handleSendMessage = () => {
    // You can replace this with actual WhatsApp or email link
    window.open('https://wa.me/919876543210?text=Hi! I\'m interested in your services. Can you help me?', '_blank');
  };

  const [heroRef, heroIntersecting] = useIntersectionObserver();
  const [introRef, introIntersecting] = useIntersectionObserver();
  const [fluteRef, fluteIntersecting] = useIntersectionObserver();
  const [designRef, designIntersecting] = useIntersectionObserver();
  const [websiteRef, websiteIntersecting] = useIntersectionObserver();
  const [photoRef, photoIntersecting] = useIntersectionObserver();
  const [ctaRef, ctaIntersecting] = useIntersectionObserver();

  return (
    <div className="services">
      <div className={`services-hero ${heroIntersecting ? 'animate-in' : ''}`} ref={heroRef}>
        <div className="container">
          <h1 className={`hero-title ${heroIntersecting ? 'title-animate' : ''}`}>Our Expert Services – Empowering You with Creativity, Spirituality, and Global Growth</h1>
          <p className={`hero-description ${heroIntersecting ? 'description-animate' : ''}`}>At Trivanda Internationals, we go beyond exports. We empower individuals and businesses globally with soulful flute training, intuitive design solutions, powerful websites, and export-ready photography. Explore our core services below.</p>
        </div>
        {/* Animated background elements */}
        <div className="hero-bg-elements">
          <div className="hero-bg-shape hero-bg-shape-1"></div>
          <div className="hero-bg-shape hero-bg-shape-2"></div>
          <div className="hero-bg-shape hero-bg-shape-3"></div>
        </div>
      </div>

      <div className="services-content">
        <div className={`services-intro ${introIntersecting ? 'animate-in' : ''}`} ref={introRef}>
          <div className="intro-header">
            <div className="intro-icon">
              <Star size={32} />
            </div>
            <h2 className={`intro-title ${introIntersecting ? 'title-animate' : ''}`}>Discover Our Premium Services</h2>
            <p className={`intro-description ${introIntersecting ? 'description-animate' : ''}`}>From spiritual growth to digital transformation, we offer comprehensive solutions tailored to your unique needs</p>
          </div>
          <div className={`intro-stats ${introIntersecting ? 'stats-animate' : ''}`}>
            <AnimatedStatItem value={50} suffix="+" label="Happy Clients" duration={2500} delay={0} />
            <AnimatedStatItem value={5} suffix="+" label="Countries Served" duration={2000} delay={300} />
            <AnimatedStatItem value={99} suffix="%" label="Success Rate" duration={1800} delay={600} />
          </div>
        </div>

        <div className="services-grid">
        {/* Flute Training Service */}
          <div className={`service-card flute-service ${fluteIntersecting ? 'animate-in' : ''}`} ref={fluteRef}>
            <div className="service-badge">
              <Music size={16} />
              <span>Most Popular</span>
            </div>
            <div className="service-header">
              <div className="service-icon">
                <Music size={48} />
              </div>
              <div className="service-title-section">
                <h2>🎵 Online Indian Bansuri Lessons</h2>
                <p className="service-tagline">Transform your soul through the timeless sound of Indian flute</p>
                <div className="service-highlights">
                  <span className="highlight-item"><Clock size={14} /> Flexible Timing</span>
                  <span className="highlight-item"><Globe size={14} /> Global Access</span>
                  <span className="highlight-item"><Award size={14} /> Certified Training</span>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description-wrapper">
              <p className="service-description" style={{textAlign: 'left'}}>
                Discover the serenity of Indian classical music through our online Bansuri (bamboo flute) lessons — tailored for global learners, from complete beginners to intermediate artists and spiritual seekers.
              </p>
                <div className="service-benefits">
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Stress Relief & Meditation</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Cultural Heritage Learning</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Personal Growth Journey</span>
                  </div>
                </div>
              </div>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">🌍 Global 1-on-1 Online Training (Zoom/Google Meet)</li>
                <li className="feature-item">🧘 Focus on Spiritual, Classical & Healing Music</li>
                <li className="feature-item">🎼 Learn Ragas, Breathwork, and Musical Meditation</li>
                <li className="feature-item">📚 Structured Curriculum with Practice Routines</li>
                <li className="feature-item">📜 Optional Certification & Performance Opportunities</li>
              </ul>
              <div className="service-cta">
              <button 
                className="cta-button"
                onClick={() => openModal('flute')}
              >
                  <Play size={20} />
                Request a Guided Flute Intro
                  <ArrowRight size={16} />
              </button>
                <div className="cta-note">
                  <Clock size={14} />
                  <span>Free 30-minute consultation included</span>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design Service */}
          <div className={`service-card design-service ${designIntersecting ? 'animate-in' : ''}`} ref={designRef}>
            <div className="service-badge">
              <Palette size={16} />
              <span>Trending</span>
            </div>
            <div className="service-header">
              <div className="service-icon">
                <Palette size={48} />
              </div>
              <div className="service-title-section">
                <h2>🎨 UI/UX Design & Branding Solutions</h2>
                <p className="service-tagline">Design that thinks deeper — driven by psychology, strategy, and purpose</p>
                <div className="service-highlights">
                  <span className="highlight-item"><Target size={14} /> User-Centered</span>
                  <span className="highlight-item"><TrendingUp size={14} /> ROI Focused</span>
                  <span className="highlight-item"><Shield size={14} /> Quality Assured</span>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description-wrapper">
              <p className="service-description" style={{textAlign: 'left'}}>
                We craft UI/UX designs that build trust, shape behavior, and elevate brands. We go beyond visual design — we design experiences rooted in user psychology, intuitive structure, and emotional impact.
              </p>
                <div className="service-benefits">
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Increased User Engagement</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Higher Conversion Rates</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Brand Recognition</span>
                  </div>
                </div>
              </div>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">🎯 User Psychology-Centered Design</li>
                {/* <li className="feature-item">🎨 Brand Identity Building & Strategy</li> */}
                <li className="feature-item">👩‍🏫 Mentorship + UI/UX Training Programs</li>
              </ul>
              <p className="service-description" style={{textAlign: 'left'}}>
                We offer tailored UI/UX courses for:
              </p>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">🎓 Students & Freshers</li>
                <li className="feature-item">🧑‍💻 Working Professionals</li>
                <li className="feature-item">👥 Startup Teams</li>
              </ul>
              <div className="service-cta">
              <button 
                className="cta-button"
                onClick={() => openModal('design')}
              >
                  <Palette size={20} />
                Let's Begin – Book My Call
                  <ArrowRight size={16} />
              </button>
                <div className="cta-note">
                  <Award size={14} />
                  <span>Certification available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Website Development Service */}
          <div className={`service-card website-service ${websiteIntersecting ? 'animate-in' : ''}`} ref={websiteRef}>
            <div className="service-badge">
              <Code size={16} />
              <span>Premium</span>
            </div>
            <div className="service-header">
              <div className="service-icon">
                <Code size={48} />
              </div>
              <div className="service-title-section">
                <h2>💻 Professional Website Design & Development</h2>
                <p className="service-tagline">✨ Get a stunning, responsive, and SEO-friendly website that builds trust and grows your brand.</p>
                <div className="service-highlights">
                  <span className="highlight-item"><Zap size={14} /> Fast Loading</span>
                  <span className="highlight-item"><Shield size={14} /> Secure</span>
                  <span className="highlight-item"><TrendingUp size={14} /> SEO Optimized</span>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description-wrapper">
              <p className="service-description" style={{textAlign: 'left'}}>
                Your website is your 24x7 brand ambassador. At Trivanda Internationals, we create performance-driven websites that reflect your values, inspire trust, and connect with customers — across all devices.
              </p>
                <div className="service-benefits">
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Mobile-First Design</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Search Engine Optimization</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Ongoing Support</span>
                  </div>
                </div>
              </div>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">🚀 Mobile-Friendly & Fast-Loading</li>
                <li className="feature-item">🔐 Secure, SEO-Optimized & Scalable</li>
                <li className="feature-item">🖥️ Crafted with Modern Tech & UX Strategy</li>
              </ul>
              <p className="service-description" style={{textAlign: 'left'}}>
                We specialize in delivering complete website solutions for:
              </p>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">Exporters & Coaches</li>
                <li className="feature-item">Artists & Personal Brands</li>
                <li className="feature-item">Local Businesses & Startups</li>
              </ul>
              <div className="service-cta">
              <button 
                className="cta-button"
                onClick={() => openModal('website')}
              >
                  <Code size={20} />
                Let's Build Your Website
                  <ArrowRight size={16} />
              </button>
                <div className="cta-note">
                  <Clock size={14} />
                  <span>Free consultation & proposal included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Photography Service */}
          <div className={`service-card photography-service ${photoIntersecting ? 'animate-in' : ''}`} ref={photoRef}>
            <div className="service-badge">
              <Camera size={16} />
              <span>Local Service</span>
            </div>
            <div className="service-header">
              <div className="service-icon">
                <Camera size={48} />
              </div>
              <div className="service-title-section">
                <h2>📸 High-Quality Product Photography</h2>
                <p className="service-tagline">Make your products shine with crisp, professional visuals</p>
                <div className="service-highlights">
                  <span className="highlight-item"><MapPin size={14} /> Nashik Based</span>
                  <span className="highlight-item"><Clock size={14} /> Quick Delivery</span>
                  <span className="highlight-item"><Star size={14} /> Premium Quality</span>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-description-wrapper">
              <p className="service-description" style={{textAlign: 'left'}}>
                Quality visuals are key to conversion and credibility. We offer premium product photography services in Nashik tailored to industries like food, packaging, retail, wellness, crafts, and more.
              </p>
                <div className="service-benefits">
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Professional Studio Setup</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Advanced Editing Skills</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={20} />
                    <span>Multiple Format Delivery</span>
                  </div>
                </div>
              </div>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">🔍 High-Resolution Images with Professional Editing</li>
                <li className="feature-item">🛒 Styled for E-Commerce, Catalogs & Branding</li>
                <li className="feature-item">📍 Local Service in Nashik with Quick Delivery</li>
              </ul>
              <p className="service-description" style={{textAlign: 'left'}}>
                Our shoots include:
              </p>
              <ul className="service-features" style={{marginBottom: '1.5rem', textAlign: 'left'}}>
                <li className="feature-item">White background & lifestyle shots</li>
                <li className="feature-item">Branding compositions & mockups</li>
                <li className="feature-item">Custom styling to match your business goals</li>
              </ul>
              <div className="service-cta">
              <button 
                className="cta-button"
                onClick={() => openModal('photography')}
              >
                  <Camera size={20} />
                Enquire for Photography Packages
                  <ArrowRight size={16} />
                </button>
                <div className="cta-note">
                  <MapPin size={14} />
                  <span>On-site photography available in PAN India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`services-cta-section ${ctaIntersecting ? 'animate-in' : ''}`} ref={ctaRef}>
          <div className="cta-content">
            <h3 className={`cta-title ${ctaIntersecting ? 'title-animate' : ''}`}>Ready to Transform Your Business?</h3>
            <p className={`cta-description ${ctaIntersecting ? 'description-animate' : ''}`}>Let's discuss how our services can help you achieve your goals</p>
            <div className={`cta-buttons ${ctaIntersecting ? 'buttons-animate' : ''}`}>
              <button className="cta-primary" onClick={handleScheduleCall}>
                <Phone size={20} />
                Schedule a Call
              </button>
              <button className="cta-secondary" onClick={handleSendMessage}>
                <Mail size={20} />
                Send Message
              </button>
            </div>
          </div>
          <div className="cta-bg-elements">
            <div className="cta-bg-shape cta-bg-shape-1"></div>
            <div className="cta-bg-shape cta-bg-shape-2"></div>
            <div className="cta-bg-shape cta-bg-shape-3"></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)} style={{ paddingTop: `${scrollPosition + 50}px` }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {modalType === 'flute' ? 'Guided Bansuri Introduction' : 
                 modalType === 'design' ? 'UI/UX Design Proposal Request' : 
                 modalType === 'website' ? 'Website Project Planner' :
                 'Photography Package Inquiry'}
              </h3>
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            {modalType === 'flute' ? (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>1. What is your current flute skill level?</label>
                  <div className="radio-group">
                    {['Beginner', 'Intermediate', 'Advanced', 'I have no experience but interested'].map((level) => (
                      <label key={level} className="radio-item">
                        <input
                          type="radio"
                          name="skillLevel"
                          value={level}
                          checked={formData.skillLevel === level}
                          onChange={handleRadioChange}
                          required
                        />
                        <span className="radio-custom"></span>
                        <span>{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>2. What type of flute lessons are you interested in?</label>
                  <div className="checkbox-group">
                    {['Indian Classical (Hindustani)', 'Light music / Bollywood', 'In Both'].map((type) => (
                      <label key={type} className="checkbox-item">
                        <input
                          type="checkbox"
                          name="lessonType"
                          value={type}
                          checked={formData.lessonType.includes(type)}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>3. Preferred Mode of Learning</label>
                  <div className="radio-group">
                    {['Online (1-on-1 Personal Session)', 'Online (Group Session)', 'Offline (In-Person at Nashik)', 'Flexible'].map((mode) => (
                      <label key={mode} className="radio-item">
                        <input
                          type="radio"
                          name="learningMode"
                          value={mode}
                          checked={formData.learningMode === mode}
                          onChange={handleRadioChange}
                          required
                        />
                        <span className="radio-custom"></span>
                        <span>{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>4. Your Age Group</label>
                  <div className="radio-group">
                    {['Below 12', '13–18', '19–30', '31–50', 'Above 50'].map((age) => (
                      <label key={age} className="radio-item">
                        <input
                          type="radio"
                          name="ageGroup"
                          value={age}
                          checked={formData.ageGroup === age}
                          onChange={handleRadioChange}
                          required
                        />
                        <span className="radio-custom"></span>
                        <span>{age}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>5. When would you like to start learning?</label>
                  <div className="radio-group">
                    {['Immediately', 'Within a week', 'Within a month', 'Just exploring'].map((time) => (
                      <label key={time} className="radio-item">
                        <input
                          type="radio"
                          name="startTime"
                          value={time}
                          checked={formData.startTime === time}
                          onChange={handleRadioChange}
                          required
                        />
                        <span className="radio-custom"></span>
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>6. Do you have your own flute?</label>
                  <div className="radio-group">
                    {['Yes', 'No', 'Planning to buy soon'].map((option) => (
                      <label key={option} className="radio-item">
                        <input
                          type="radio"
                          name="hasFlute"
                          value={option}
                          checked={formData.hasFlute === option}
                          onChange={handleRadioChange}
                          required
                        />
                        <span className="radio-custom"></span>
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>7. How did you hear about us?</label>
                  <div className="checkbox-group">
                    {['Instagram', 'Google', 'Friend / Family', 'Lessonface / TeacherOn', 'Other'].map((source) => (
                      <label key={source} className="checkbox-item">
                        <input
                          type="checkbox"
                          name="heardFrom"
                          value={source}
                          checked={formData.heardFrom.includes(source)}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkbox-custom"></span>
                        <span>{source}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Submit Request
                  </button>
                </div>
              </form>
            ) : modalType === 'design' ? (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>1️⃣ What are you interested in?</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="services">UI/UX Design Services</option>
                    <option value="training">Industrial UI/UX Training / Mentorship</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>2️⃣ Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                  <small className="form-hint">(To personalize future messages)</small>
                </div>
                <div className="form-group">
                  <label>3️⃣ Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                  <small className="form-hint">(For proposal, call invite, or course brochure)</small>
                </div>
                <div className="form-group">
                  <label>4️⃣ WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                  <small className="form-hint">(Quick connect, reminders, material sharing)</small>
                </div>
                <div className="form-group">
                  <label>5️⃣ Briefly tell us your goal or requirement</label>
                  <textarea
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="Examples: 'Need UI for my food delivery app', or 'Want to join UI/UX training with certification'"
                  />
                </div>
                <div className="form-group">
                  <label>6️⃣ How did you hear about us?</label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select source</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="website">Website</option>
                    <option value="referral">Referred by friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Conditional Training Fields */}
                {(formData.interest === 'training' || formData.interest === 'both') && (
                  <>
                    <div className="form-group">
                      <label>Experience level</label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="designer">Designer</option>
                        <option value="developer">Developer</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Interested in</label>
                      <select
                        name="trainingType"
                        value={formData.trainingType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select training type</option>
                        <option value="certificate">Certificate Program</option>
                        <option value="mentorship">Mentorship</option>
                        <option value="college">College Tie-up</option>
                        <option value="workshop">Team Workshop</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Conditional Service Fields */}
                {(formData.interest === 'services' || formData.interest === 'both') && (
                  <>
                    <div className="form-group">
                      <label>Project Type</label>
                      <div className="checkbox-group">
                        {['Web App', 'SaaS', 'Mobile App', 'Website', 'Other'].map((type) => (
                          <label key={type} className="checkbox-item">
                            <input
                              type="checkbox"
                              value={type}
                              checked={formData.projectType.includes(type)}
                              onChange={handleCheckboxChange}
                            />
                            <span>{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="2weeks">Within 2 weeks</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Budget Range (optional)</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., 50k-1L, Flexible, etc."
                      />
                    </div>
                  </>
                )}

                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    🚀 Let's Begin – Book My Call
                  </button>
                </div>
              </form>
            ) : modalType === 'website' ? (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>🏢 Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your business type</option>
                    <option value="startup">Startup</option>
                    <option value="exporter">Exporter</option>
                    <option value="educator">Educator/Coach</option>
                    <option value="agency">Agency</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="portfolio">Portfolio/Personal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>🎯 Website Goal</label>
                  <select
                    name="websiteGoal"
                    value={formData.websiteGoal}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">What's your main goal?</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="sales">Sales/E-commerce</option>
                    <option value="branding">Brand Awareness</option>
                    <option value="portfolio">Portfolio Showcase</option>
                    <option value="information">Information/Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>⚡ Features Needed</label>
                  <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="Describe the key features you need (e.g., contact forms, payment integration, blog, admin panel, etc.)"
                  />
                </div>
                <div className="form-group">
                  <label>💰 Budget Range</label>
                  <select
                    name="websiteBudget"
                    value={formData.websiteBudget}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                    <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                    <option value="above-5l">Above ₹5,00,000</option>
                    <option value="flexible">Flexible/To discuss</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>👤 Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>📧 Contact Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>📱 Contact Phone</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    🚀 Get Website Proposal
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>📦 Product Type</label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select product type</option>
                    <option value="food">Food & Beverages</option>
                    <option value="packaging">Packaging Products</option>
                    <option value="handmade">Handmade Crafts</option>
                    <option value="retail">Retail Goods</option>
                    <option value="wellness">Wellness Products</option>
                    <option value="textiles">Textiles & Fabrics</option>
                    <option value="electronics">Electronics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>🔢 Quantity</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select quantity</option>
                    <option value="1-10">1-10 products</option>
                    <option value="11-25">11-25 products</option>
                    <option value="26-50">26-50 products</option>
                    <option value="51-100">51-100 products</option>
                    <option value="100+">100+ products</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>📍 Location</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select location</option>
                    <option value="nashik">Nashik City</option>
                    <option value="nashik-rural">Nashik Rural</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="other">Other Location</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>📱 WhatsApp Number</label>
                  <input
                    type="tel"
                    name="photographyWhatsapp"
                    value={formData.photographyWhatsapp}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label>📧 Email Address</label>
                  <input
                    type="email"
                    name="photographyEmail"
                    value={formData.photographyEmail}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    📸 Get Photography Packages
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services; 