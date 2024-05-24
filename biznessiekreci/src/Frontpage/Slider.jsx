import React, { useState, useEffect } from 'react';
import './Slider.css';

const ImageSlider = ({ slides, autoPlay = true, autoPlayTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayTime, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <p>{slides[currentIndex]}</p>
      </div>
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;