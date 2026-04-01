import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import MapEmbed from "../MapEmbed/MapEmbed";
import about from "../../assets/about.jpeg";

const imageBase = `${import.meta.env.BASE_URL}images/`;
const uaeflag = `${imageBase}uaeflag.png`;
const indiaflag = `${imageBase}indiaflag.png`;
const southafricaflag = `${imageBase}southafricaflag.png`;
const globeicon = `${imageBase}globeicon.png`;
const personicon = `${imageBase}personicon.png`;
const assurityicon = `${imageBase}assurityicon.png`;
const clipboardicon = `${imageBase}clipboardicon.png`;
const handshakeicon = `${imageBase}handshakeicon.png`;

const About = () => {
  const navigate = useNavigate();

  // Services data
  const services = [
    {
      icon: "🌍",
      title: "General Trading",
      description:
        "We supply a wide variety of goods across sectors including Construction Materials, Food & Beverages, Electrical and Mechanical Supplies, Consumer Products, Household & Industrial Items.",
    },
    {
      icon: "🚢",
      title: "Import & Export",
      description:
        "From product sourcing to customs clearance, we manage the full supply chain across borders: Global Sourcing, Export Documentation, Import Handling, Freight & Logistics Coordination.",
    },
    {
      icon: "🛒",
      title: "Custom Procurement",
      description:
        "Tell us what you need—we’ll find it for you. Through our global supplier base, we provide custom sourcing and delivery of specific products tailored to your business requirements.",
    },
  ];

  // Industries data
  const industries = [
    "Retail & Wholesale",
    "Hospitality & Tourism",
    "Construction & Real Estate",
    "Food Distribution",
    "Manufacturing & Industrial",
    "Government and Institutional Buyers",
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      icon: globeicon,
      title: "UAE-Based Global Hub",
      description:
        "Leverage our extensive global network to connect your business seamlessly across continents.",
    },
    {
      icon: personicon,
      title: "Strong Sourcing Network",
      description:
        "We handle special shipments with expert care and customized logistics solutions.",
    },
    {
      icon: handshakeicon,
      title: "Competitive Pricing",
      description:
        "Count on us for on-time deliveries that keep your operations running smoothly.",
    },
    {
      icon: clipboardicon,
      title: "Timely Deliveries",
      description:
        "Our tailored solutions fit your unique business needs, ensuring maximum efficiency.",
    },
    {
      icon: personicon,
      title: "Professional Trade Support",
      description:
        "Experience round-the-clock support for any queries or logistics assistance.",
    },
    {
      icon: assurityicon,
      title: "End-to-End Service",
      description:
        "Join hundreds of satisfied clients who trust our reputable and esteemed company.",
    },
  ];

  // Team data
  const team = [
    {
      name: "Ambikesh Tripathi",
      position: "CEO - Founder",
      phone: "+971 56 911 9955",
      image: `${imageBase}men1.png`,
    },
    {
      name: "Spandana M",
      position: "Operational Head",
      phone: "+70 264 566 579",
      image: `${imageBase}lady.png`,
    },
  ];

  // Locations
  const locations = [
    { name: "U.A.E", flag: uaeflag },
    { name: "INDIA", flag: indiaflag },
    { name: "AFRICA", flag: southafricaflag },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Our Company</h1>
            <p>Your Global Partner in Trading, Import & Export Solutions</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="who-we-are-grid">
            <div className="who-we-are-image">
              <img src={about} alt="Who We Are" className="who-we-are-img" />
            </div>
            <div className="who-we-are-content">
              <h2 className="section-title-left">Who We Are</h2>
              <p className="who-we-are-text">
                <strong>Vistaran Exports</strong> is a trusted name in general
                trading and international trade, connecting buyers and suppliers
                across continents. Headquartered in the UAE, we offer reliable
                sourcing, timely delivery, and comprehensive logistics support.
                Our experienced team ensures your business gets what it
                needs—when and where it needs it.
              </p>
              <div className="mission-vision">
                <div className="mission">
                  <h3>🎯 Our Mission</h3>
                  <p>
                    To simplify global trade by offering efficient, ethical, and
                    affordable trading solutions.
                  </p>
                </div>
                <div className="vision">
                  <h3>🌟 Our Vision</h3>
                  <p>
                    To be the preferred trade partner for businesses worldwide,
                    known for integrity, reliability, and service excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-center">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive trading solutions tailored to your needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-center">Industries We Serve</h2>
            <p className="section-subtitle">
              Serving diverse sectors with excellence
            </p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-name">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-center">Why Choose Us</h2>
            <p className="section-subtitle">Some reasons to partner with us</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">
                  <img src={item.icon} />
                </div>
                <h3 className="why-choose-title">{item.title}</h3>
                <p className="why-choose-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-center">Our Team</h2>
            <p className="section-subtitle">
              Meet the experts behind our success
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card-img"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-position">{member.position}</p>
                  <p className="team-card-phone">{member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Locations */}
      <section className="locations-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-center">Major Locations</h2>
            <p className="section-subtitle">Transporting Across The World</p>
          </div>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-flag">
                  <img src={location.flag} />
                </div>
                <h3 className="location-name">{location.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Box */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-wrapper">
            {/* Left column: contact details */}
            <div className="contact-info-box">
              <h3>Get in Touch</h3>
              <p>
                <strong>📍 Address:</strong> 209 Austria Business Centre, Al
                hudaiba mall, Dubai
              </p>
              <p>
                <strong>📞 Phone:</strong> +971 56 911 9955
              </p>
              <p>
                <strong>📧 Email:</strong> info@vistaranexports.com
              </p>
              <p>
                <strong>🌐 Web:</strong> www.vistaranexports.com
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
            {/* Right column: map */}
            <div className="map-container">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
