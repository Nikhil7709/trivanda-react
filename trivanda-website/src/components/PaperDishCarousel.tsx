import React, { useState, useEffect, useRef } from 'react';
import './TuttiFruttiCarousel.css';

// const images = [
//   '/paper-dish-3.jpg',
//   '/paper-dish-2.jpg',
//   '/paper-dish-1.jpg',
// ];

const images = [
  `${process.env.PUBLIC_URL}/paper-dish-3.jpg`,
  `${process.env.PUBLIC_URL}/paper-dish-2.jpg`,
  `${process.env.PUBLIC_URL}/paper-dish-1.jpg`,
];

const PaperDishCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <div
      className="tutti-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="carousel-image-wrapper">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Paper Dish ${i+1}`}
            className={`carousel-image${i === current ? ' active' : ''}`}
            style={{ display: i === current ? 'block' : 'none' }}
            draggable={false}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaperDishCarousel; 