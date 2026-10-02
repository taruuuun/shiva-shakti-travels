import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME, WHATSAPP_NUMBER } from '../config';
import { generateWhatsAppLink } from '../utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--dark-navy)', color: 'var(--white)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              <img 
                src="/images/shiva-shakthi-travels-logo.webp" 
                alt={BUSINESS_NAME} 
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
              />
              {BUSINESS_NAME}
            </div>
            <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
              Your trusted travel partner for Srisailam pilgrimage tours, outstation travel, and comfortable rental cars.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">Home</Link></li>
              <li><Link to="/about" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">About Us</Link></li>
              <li><Link to="/services" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">Services</Link></li>
              <li><Link to="/contact" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>Popular Services</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/services" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">Srisailam Tours</Link></li>
              <li><Link to="/services" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">Rental Cars</Link></li>
              <li><Link to="/services" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">One-Day Trips</Link></li>
              <li><Link to="/services" style={{ color: '#9CA3AF', transition: 'color 0.2s' }} className="footer-link">Outstation Travel</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>Contact</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#9CA3AF' }}>Phone: +{WHATSAPP_NUMBER}</li>
              <li>
                <a 
                  href={generateWhatsAppLink("Hello Shiva Shakti Travels! I would like to know more about your travel packages.")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            &copy; {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p style={{ color: 'var(--accent-saffron)', fontSize: '0.875rem', fontWeight: '500' }}>
            Shiva Shakti Travels — Your Journey, Our Responsibility.
          </p>
        </div>
      </div>
      <style>{`
        .footer-link:hover { color: var(--primary-orange) !important; }
      `}</style>
    </footer>
  );
};

export default Footer;
