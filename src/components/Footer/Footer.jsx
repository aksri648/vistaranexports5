import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Industries We Serve */}
          <div className="footer-section">
            <h3 className="footer-title">Industries We Serve</h3>
            <ul className="footer-links">
              <li>Retail & Wholesale</li>
              <li>Hospitality & Tourism</li>
              <li>Construction & Real Estate</li>
              <li>Food Distribution</li>
              <li>Manufacturing & Industrial</li>
              <li>Government Buyers</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="footer-section">
            <h3 className="footer-title">Why Choose Us</h3>
            <ul className="why-choose-list">
              <li>
                <FaCheckCircle className="check-icon" /> UAE-Based Global Hub
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Strong Sourcing Network
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Competitive Pricing
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Timely Deliveries
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Professional Support
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> End-to-End Service
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="company-name">Vistaran Exports</div>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>209 Austria Business Centre, Al hudaiba mall, Dubai</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+971 56 911 9955</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a
                  href="mailto:info@vistaranexports.com"
                  className="contact-icon" style={{textDecoration:'none',color:'white'}}
                >
                  Info@vistaranexports.com
                </a>
              </li>

              <li>
                <FaGlobe className="contact-icon" />
                <a
                  href="www.vistaranexports.com"
                  className="contact-icon" style={{textDecoration:'none',color:'white'}}
                >www.vistaranexports.com</a>
               
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="footer-cta">
          <p className="cta-text">
            Have a product in mind? Explore opportunities with us
          </p>
          <div className="cta-buttons">
            <button
              className="cta-btn contact-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Form
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; {currentYear} Vistaran Exports. All rights reserved.</p>
          {/* <div className="legal-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/shipping">Shipping</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
