import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_NAME, WHATSAPP_NUMBER } from '../config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'var(--white)',
    borderBottom: isScrolled ? '1px solid #E5E7EB' : 'none',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
    transition: 'all 0.3s ease',
    padding: '1rem 0'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontWeight: '700',
    fontSize: '1.25rem',
    color: 'var(--dark-navy)',
    fontFamily: 'var(--font-heading)'
  };

  const desktopNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  };

  const linkStyle = (isActive) => ({
    fontWeight: '500',
    color: isActive ? 'var(--primary-orange)' : 'var(--dark-navy)',
    transition: 'color 0.2s',
  });

  const topBarStyle = {
    backgroundColor: 'var(--dark-navy)',
    color: 'var(--white)',
    padding: '0.5rem 0',
    fontSize: '0.875rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <>
      <div style={topBarStyle} className="d-none-mobile">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={14} color="var(--primary-orange)" /> +{WHATSAPP_NUMBER}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              contact@shivashaktitravels.com
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ color: 'var(--accent-saffron)' }}>Save 10% on Multi-day tours!</span>
          </div>
        </div>
      </div>
      <header style={headerStyle}>
        <div className="container">
          <nav style={navStyle}>
            <Link to="/" style={logoStyle}>
              <img 
                src="/images/shiva-shakthi-travels-logo.webp" 
                alt={BUSINESS_NAME} 
                style={{ height: '75px', width: 'auto', objectFit: 'contain' }} 
              />
            </Link>

          {/* Desktop Navigation */}
          <div style={desktopNavStyle} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={linkStyle(location.pathname === link.path)}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary">
              Book Your Trip
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--white)',
          padding: '1rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '1px solid #E5E7EB'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{...linkStyle(location.pathname === link.path), display: 'block', padding: '0.5rem 0'}}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Book Your Trip
          </Link>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: var(--primary-orange) !important; }
      `}</style>
    </header>
    </>
  );
};

export default Header;
