import React, { useState, useRef, useEffect } from 'react';
import './IndustrialChemicals.css';
import chemical1 from '../../assets/chemical1.jpeg';
import chemical2 from '../../assets/chemical2.jpeg';
import chemical3 from '../../assets/chemical3.jpeg';
import chemical4 from '../../assets/chemical4.jpeg';
import chemical5 from '../../assets/chemical5.jpeg';
import chemical6 from '../../assets/chemical6.jpeg';




const IndustrialChemicals = () => {
  const products = [
    { id: 1, name: 'Caustic Soda 1', image: chemical1 },
    { id: 2, name: 'Caustic Soda 2', image: chemical2 },
    { id: 3, name: 'Caustic Soda 3', image: chemical3 },
    { id: 4, name: 'Caustic Soda 4', image: chemical4 },
    { id: 5, name: 'Caustic Soda 5', image: chemical5 },
    { id: 6, name: 'Caustic Soda 6', image: chemical6 },
  
  ];

  // Build slides (each slide = 3 images)
  const itemsPerSlide = 3;
  const originalSlides = [];
  for (let i = 0; i < products.length; i += itemsPerSlide) {
    originalSlides.push(products.slice(i, i + itemsPerSlide));
  }

  // Create extended slides for infinite loop: [last, ...originals, first]
  const extendedSlides = [
    originalSlides[originalSlides.length - 1], // last
    ...originalSlides,
    originalSlides[0]                           // first
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalRealSlides = originalSlides.length;
  const totalExtendedSlides = extendedSlides.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Handle transition end to reset index when at clones
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // Moved to fake last slide -> jump to last real slide
      setIsTransitioning(false);
      setCurrentIndex(totalRealSlides);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        });
      });
    } else if (currentIndex === totalExtendedSlides - 1) {
      // Moved to fake first slide -> jump to first real slide
      setIsTransitioning(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        });
      });
    } else {
      setIsAnimating(false);
    }
  };

  // Auto‑play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, nextSlide]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Get active dot index
  const getActiveDotIndex = () => {
    if (currentIndex === totalExtendedSlides - 1) return 0;
    if (currentIndex === 0) return totalRealSlides - 1;
    return currentIndex - 1;
  };

  return (
    <div className="industrialchemicals-page">
      <div className="container">
        <div className="page-header">
          <h1>Industrial Chemicals</h1>
          <p>Bulk Chemicals</p>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="carousel-container">
            <div
              className="carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none'
              }}
            >
              {extendedSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="carousel-slide">
                  <div className="image-grid">
                    {slide.map((product, idx) => (
                      <div key={product.id} className="image-card">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                      </div>
                    ))}
                    {/* Fill empty slots with empty cards */}
                    {slide.length < itemsPerSlide &&
                      Array(itemsPerSlide - slide.length)
                        .fill(null)
                        .map((_, i) => (
                          <div key={`empty-${i}`} className="image-card empty-card" />
                        ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
            ‹
          </button>
          <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
            ›
          </button>

          <div className="carousel-dots">
            {originalSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === getActiveDotIndex() ? 'active' : ''}`}
                onClick={() => goToSlide(index + 1)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialChemicals;