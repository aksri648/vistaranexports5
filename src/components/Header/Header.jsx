import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsProductsDropdownOpen(false);
    }
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  // Products dropdown items with icons or additional data
 const productCategories = [
  { name: 'Rice', path: '/products/rice', description: 'Premium Basmati & More' },
  { name: 'Spices', path: '/products/spice', description: 'Authentic Indian Spices' },
  { name: 'Pulses', path: '/products/pulses', description: 'Protein-Rich Legumes' },
  { name: 'Garments', path: '/products/garments', description: 'Textile & Apparel' },
  { name: 'Spare Part', path: '/products/spare part', description: 'Industrial Components' },
  { name: 'Industrial Chemicals', path: '/products/industrial chemicals', description: 'Bulk Chemicals' },
];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo area - rectangle shape with premium gradient */}
          <Link to="/" className="logo">
            <div className="logo-container">
              <div className="logo-rectangle">
                {/* Logo image placeholder - replace with your actual logo path */}
                <img src={logo} alt="Vistaran Exports" className="logo-img" />
              </div>
              <div className="logo-text-wrapper">
                <span className="logo-text">Vistaran</span>
                <span className="logo-text-light">Exports</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              
              {/* Products Dropdown - Enhanced Premium Version */}
              <li className={`dropdown ${isProductsDropdownOpen ? 'active' : ''}`}>
                <Link 
                
                  className="dropdown-toggle"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  Products <FaChevronDown className="dropdown-icon" />
                </Link>
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  
                  <div className="dropdown-grid">
                    {productCategories.map((category, index) => (
                      <Link key={index} to={category.path} className="dropdown-item">
                        <div className="dropdown-item-content">
                          <span className="dropdown-item-name">{category.name}</span>
                          <span className="dropdown-item-description">{category.description}</span>
                        </div>
                        <span className="dropdown-item-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                 
                </div>
              </li>
              
              <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to="/about">About Company</Link>
              </li>
              
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <ul className="mobile-nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            
            {/* Mobile Products Dropdown */}
            <li className="mobile-dropdown">
              <div className="mobile-dropdown-header" onClick={toggleProductsDropdown}>
                <span>Products</span>
                <FaChevronDown className={`dropdown-icon ${isProductsDropdownOpen ? 'open' : ''}`} />
              </div>
              <div className={`mobile-dropdown-menu ${isProductsDropdownOpen ? 'open' : ''}`}>
                {productCategories.map((category, index) => (
                  <Link 
                    key={index} 
                    to={category.path} 
                    className="mobile-dropdown-item"
                    onClick={toggleMenu}
                  >
                    <span className="mobile-dropdown-item-name">{category.name}</span>
                    <span className="mobile-dropdown-item-description">{category.description}</span>
                  </Link>
                ))}
              </div>
            </li>
            
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about" onClick={toggleMenu}>About Company</Link>
            </li>
            
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;