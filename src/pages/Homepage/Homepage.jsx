import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
const uaeflag = '/images/uaeflag.png';
const indiaflag = '/images/indiaflag.png';
const southafricaflag = '/images/southafricaflag.png';
const globeicon = '/images/globeicon.png';
const personicon = '/images/personicon.png';
const assurityicon = '/images/assurityicon.png';
const clipboardicon = '/images/clipboardicon.png';
const handshakeicon = '/images/handshakeicon.png';


const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategorySlide, setCurrentCategorySlide] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const navigate = useNavigate();

  // Banner slides data - EXACTLY THE SAME AS BEFORE
 // Banner slides data - UPDATED WITH NEW CONTENT
const slides = [
  {
    
  
    id: 2,
    title: "Agriculture Products",
    subtitle: "Premium Quality Farm Produce",
    description: "Vistaran Exports is a trusted name in general trading and international trade, connecting buyers and suppliers across continents with premium agricultural products.",
    cta: "Contact Us",
    background: "linear-gradient(135deg, #0B014B 0%, #1a6b3a 100%)",
    image: "/images/grocery.jpg",
    page: '/contact'
  },
  {
    id: 3,
    title: "Consumer Products",
    subtitle: "Quality Goods for Everyday Life",
    description: "Headquartered in the UAE, we offer reliable sourcing, timely delivery, and comprehensive logistics support for all consumer product needs.",
    cta: "Contact Us",
    image: "/images/consumergoodbanner.png",
    page: '/contact'
  },
  {
    id: 4,
    title: "Household & Industrial Items",
    subtitle: "Complete Solutions for Every Sector", 
    description: "We supply a wide variety of goods across sectors including household essentials and industrial supplies with competitive pricing.",
    cta: "Contact Us",
    background: "linear-gradient(135deg, #2c3e50 0%, #1a2634 100%)",
    image: "/images/household1.jpg",
    page: '/contact'
  }
  
];

  // Product Categories for Horizontal Carousel - SINGLE ROW (4 items per slide)
  const productCategories = [
    {
      id: 1,
      name: "Rice",
      description: "Premium Basmati & More",
      image: "/images/ricecats.jpeg"
    },
    {
      id: 2,
      name: "Spice",
      description: "Authentic Indian Spices",
      image: "/images/spicecat.jpeg"
    },
    {
      id: 3,
      name: "Pulses",
      description: "Protein-Rich Legumes",
      image: "/images/pulsecat.jpeg"
    },
    {
      id: 4,
      name: "Garments",
      description: "Textile & Apparel",
      image: "/images/garmentcat.avif"
    },
    {
      id: 5,
      name: "Spare Part",
      description: "Industrial Components",
      image: "/images/machinecat.jpeg"
    },
    {
      id: 6,
      name: "Industrial Chemicals",
      description: "Bulk Chemicals",
      image: "/images/chemicalcat.jpeg"
    }
    
    
  ];

  // Why Choose Us data
  const whyChooseUs = [
    { icon: globeicon, title: "UAE-Based Global Hub", description: "Leverage our extensive global network to connect your business seamlessly across continents." },
    { icon: personicon, title: "Strong Sourcing Network", description: "We handle special shipments with expert care and customized logistics solutions." },
    { icon: handshakeicon, title: "Competitive Pricing", description: "Count on us for on-time deliveries that keep your operations running smoothly." },
    { icon: clipboardicon, title: "Timely Deliveries", description: "Our tailored solutions fit your unique business needs, ensuring maximum efficiency." },
    { icon: personicon, title: "Professional Trade Support", description: "Experience round-the-clock support for any queries or logistics assistance." },
    { icon: assurityicon, title: "End-to-End Service", description: "Join hundreds of satisfied clients who trust our reputable and esteemed company." }
  ];

  // Testimonials data
  const testimonials = [
    { id: 1, name: "Fatima Al Nuaimi", title: "Client", quote: "The team handled my special shipment with great care and professionalism. I trust them for all my import and export needs.", rating: "Fastest Response" },
    { id: 2, name: "Saeed Bin Mohammed", title: "Client", quote: "Fast, secure, and efficient service from Vistaran Exports. Their 24/7 support helped me resolve queries quickly.", rating: "Good Services" },
    { id: 3, name: "Layla Al Mazrouei", title: "Client", quote: "Highly recommended for bespoke logistics solutions. Vistaran Exports understands our business and tailors services perfectly.", rating: "Great Work" },
    { id: 4, name: "Ahmad Al Farsi", title: "Client", quote: "Vistaran Exports delivers consistently on time with excellent customer service, making my shipping experience hassle-free and reliable.", rating: "On Time Delivery" },
    { id: 5, name: "Fatima Al Nuaimi", title: "Client", quote: "The team handled my special shipment with great care and professionalism. I trust them for all my import and export needs.", rating: "Fastest Response" },
    { id: 6, name: "Saeed Bin Mohammed", title: "Client", quote: "Fast, secure, and efficient service from Vistaran Exports. Their 24/7 support helped me resolve queries quickly.", rating: "Good Services" },
    { id: 7, name: "Layla Al Mazrouei", title: "Client", quote: "Highly recommended for bespoke logistics solutions. Vistaran Exports understands our business and tailors services perfectly.", rating: "Great Work" },
    { id: 8, name: "Ahmad Al Farsi", title: "Client", quote: "Vistaran Exports delivers consistently on time with excellent customer service, making my shipping experience hassle-free and reliable.", rating: "On Time Delivery" },
  ];



  // Major Locations
  const locations = [
    { name: "U.A.E", flag: uaeflag },
    { name: "INDIA", flag: indiaflag },
    { name: "AFRICA", flag: southafricaflag }
  ];

  // Banner Navigation Functions
  const nextBannerSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevBannerSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToBannerSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality for banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Category carousel functions - SINGLE ROW with 4 items per slide
  const itemsPerPage = 4; // Show 4 items per row (like testimonial carousel)
  const totalCategorySlides = Math.ceil(productCategories.length / itemsPerPage);

  const nextCategorySlide = () => {
    setCurrentCategorySlide((prev) => (prev + 1) % totalCategorySlides);
  };

  const prevCategorySlide = () => {
    setCurrentCategorySlide((prev) => (prev - 1 + totalCategorySlides) % totalCategorySlides);
  };

  const goToCategorySlide = (index) => {
    setCurrentCategorySlide(index);
  };

  // Testimonial carousel functions
  const testimonialsPerPage = 4;
  const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides);
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
  };

  const goToTestimonialSlide = (index) => {
    setCurrentTestimonialSlide(index);
  };

  const handleSlideClick = (slide) => {
    if (slide.page) {
      navigate(slide.page);
    }
  };

  return (
    <div className="homepage">
      {/* Banner Carousel - EXACTLY THE SAME AS BEFORE */}
      <section className="carousel-section" aria-label="Company features">
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                aria-hidden={index !== currentSlide}
              >
                <div className="slide-link" onClick={() => handleSlideClick(slide)}>
                  <div 
                    className="slide-background"
                    style={{ background: slide.background }}
                  >
                    {/* Optional Image Overlay */}
                    {slide.image && (
                      <div 
                        className="slide-image-overlay" 
                        style={{ backgroundImage: `url(${slide.image})` }}
                      ></div>
                    )}
                    <div className="slide-overlay">
                      <div className="slide-content">
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-subtitle">{slide.subtitle}</p>
                        <p className="slide-description">{slide.description}</p>
                        <button 
                          className="slide-cta"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSlideClick(slide);
                          }}
                        >
                          {slide.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="carousel-arrow carousel-arrow-prev"
            onClick={prevBannerSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className="carousel-arrow carousel-arrow-next"
            onClick={nextBannerSlide}
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToBannerSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section - About Company */}
      <section className="about-company-section">
        <div className="container">
          <div className="about-company-content">
            <h1 className="about-company-title">About Company</h1>
            <h2 className="about-company-subtitle">Your Global Partner in Trading, Import & Export Solutions</h2>
            <p className="about-company-description">
              We are a UAE-based general trading company specializing in the sourcing, import, and export of a wide range of goods and commodities. With a vast global network and deep industry knowledge, we help businesses access reliable products and seamless trade services—on time and at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Image Left Text Right */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="who-we-are-grid">
            <div className="who-we-are-image">
              <img src="/images/export.jpeg" alt="Who We Are" className="who-we-are-img" />
            </div>
            <div className="who-we-are-content">
              <h2 className="who-we-are-title">Who We Are</h2>
              <p className="who-we-are-text">
                <strong>Vistaran Exports</strong> is a trusted name in general trading and international trade, connecting buyers and suppliers across continents. Headquartered in the UAE, we offer reliable sourcing, timely delivery, and comprehensive logistics support. Our experienced team ensures your business gets what it needs—when and where it needs it.
              </p>
              <div className="who-we-are-mission">
                <h3>🎯 Our Mission</h3>
                <p>To simplify global trade by offering efficient, ethical, and affordable trading solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Horizontal Carousel - SINGLE ROW (4 items per slide) */}
      <section className="categories-carousel-section">
        <div className="container">
          <div className="categories-carousel-header">
            <div>
              <h2 className="categories-carousel-title">Product Categories</h2>
              <span className="categories-carousel-count">{productCategories.length} items</span>
            </div>
            <div className="categories-carousel-arrows">
              <button className="categories-carousel-arrow prev" onClick={prevCategorySlide}>‹</button>
              <button className="categories-carousel-arrow next" onClick={nextCategorySlide}>›</button>
            </div>
          </div>

          <div className="categories-carousel-container">
            <div className="categories-carousel-track" style={{ transform: `translateX(-${currentCategorySlide * 100}%)` }}>
              {Array.from({ length: totalCategorySlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="categories-carousel-slide">
                  <div className="categories-grid-single-row">
                    {productCategories.slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage).map((category) => (
                      <div key={category.id} className="category-card">
                        <div className="category-card-image">
                          <img src={category.image} alt={category.name} className="category-card-img" />
                        </div>
                        <div className="category-card-content">
                          <h3 className="category-card-name">{category.name}</h3>
                          <p className="category-card-description">{category.description}</p>
                          <button className="category-card-btn" onClick={() => navigate(`/products/${category.name.toLowerCase()}`)}>
                            View Products <span className="category-card-arrow">→</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Carousel Dots */}
          <div className="categories-carousel-dots">
            {Array.from({ length: totalCategorySlides }).map((_, index) => (
              <button
                key={index}
                className={`categories-carousel-dot ${index === currentCategorySlide ? 'active' : ''}`}
                onClick={() => goToCategorySlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Transport Excellence Section */}
      <section className="transport-excellence-section">
        <div className="container">
          <div className="transport-excellence-content">
            <h2 className="transport-excellence-title">Committed to Delivering Excellence in Transport</h2>
            <button className="transport-excellence-btn" onClick={() => navigate('/contact')}>
              Request Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-center">Why Choose Us</h2>
            <p className="section-subtitle">Some reasons to choose us</p>
          </div>

          <div className="why-choose-us-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-us-card">
                <div className="why-choose-us-icon"><img src={item.icon} alt={item.title} className="w-10 h-10" /></div>
                <h3 className="why-choose-us-title">{item.title}</h3>
                <p className="why-choose-us-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Locations Section */}
      <section className="major-locations-section">
        <div className="container">
          <h2 className="major-locations-title">Major Locations</h2>
          <p className="major-locations-subtitle">Transporting Across The World</p>
          <div className="major-locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="major-location-card">
                <div className="major-location-flag"><img src={location.flag} /></div>
                <h3 className="major-location-name">{location.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="testimonials-carousel-section">
        <div className="container">
          <div className="testimonials-carousel-header">
            <div>
              <h2 className="testimonials-carousel-title">Testimonials</h2>
              <p className="testimonials-carousel-subtitle">What Client Say</p>
            </div>
            <div className="testimonials-carousel-arrows">
              <button className="testimonials-carousel-arrow prev" onClick={prevTestimonialSlide}>‹</button>
              <button className="testimonials-carousel-arrow next" onClick={nextTestimonialSlide}>›</button>
            </div>
          </div>

          <div className="testimonials-carousel-container">
            <div className="testimonials-carousel-track" style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}>
              {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="testimonials-carousel-slide">
                  <div className="testimonials-grid">
                    {testimonials.slice(slideIndex * testimonialsPerPage, (slideIndex + 1) * testimonialsPerPage).map((testimonial) => (
                      <div key={testimonial.id} className="testimonial-card">
                        <div className="testimonial-rating">“{testimonial.rating}”</div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-title">{testimonial.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Carousel Dots */}
          <div className="testimonials-carousel-dots">
            {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
              <button
                key={index}
                className={`testimonials-carousel-dot ${index === currentTestimonialSlide ? 'active' : ''}`}
                onClick={() => goToTestimonialSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

     {/* Our Team Section */}
<section className="our-team-section">
  <div className="container">
    <h2 className="our-team-title">Our Team</h2>
    <p className="our-team-subtitle">Meet with expert team</p>
    <p className="our-team-contact">Contact Us</p>

    <div className="team-grid-two">
      {/* Team Member 1 - Ambikesh Tripathi */}
      <div className="team-card">
        <div className="team-card-image">
          <img src="/images/men1.png" alt="Ambikesh Tripathi" className="team-card-img" />
        </div>
        <div className="team-card-content">
          <h3 className="team-card-name">Ambikesh Tripathi</h3>
          <p className="team-card-position">CEO - Founder</p>
          <p className="team-card-phone">+971 56 911 9955</p>
        </div>
      </div>

      {/* Team Member 2 - Spandana M */}
      <div className="team-card">
        <div className="team-card-image">
          <img src="/images/lady.png" alt="Spandana M" className="team-card-img" />
        </div>
        <div className="team-card-content">
          <h3 className="team-card-name">Spandana M</h3>
          <p className="team-card-position">Operational Head</p>
          <p className="team-card-phone">+70 264 566 579</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
      
    </div>
  );
};

export default Homepage;