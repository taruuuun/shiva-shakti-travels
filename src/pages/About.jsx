import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, ThumbsUp, MessageSquare } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const About = () => {
  useSEO(
    'About Us | Shiva Shakti Travels',
    'Learn about Shiva Shakti Travels, our mission, and how we provide safe, comfortable journeys for pilgrimages and family tours.'
  );

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0 6rem',
        backgroundImage: 'linear-gradient(rgba(49, 48, 65, 0.6), rgba(49, 48, 65, 0.8)), url(/images/travel_car.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <span className="font-cursive hero-subtitle">Get to know us</span>
          <h1 className="hero-title">About Shiva Shakti Travels</h1>
          <p className="hero-text">
            Making every journey comfortable, convenient, and memorable.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="grid grid-2 items-center" style={{ gap: '4rem', marginBottom: '5rem' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="/images/hero_banner.jpg" alt="About Shiva Shakti Travels" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: 'var(--primary-orange)' }}>Our Story</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--secondary-text)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Shiva Shakti Travels provides travel and vehicle rental services for pilgrims, families, and groups. We specialize in Srisailam pilgrimage trips, temple sightseeing, one-day round trips, multi-day tours, and outstation travel.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--secondary-text)', lineHeight: '1.8' }}>
                Our aim is to make every journey convenient through comfortable vehicles, experienced drivers, and straightforward booking support.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '5rem' }}>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Our Mission</h3>
              <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                To make every trip convenient and comfortable by helping travelers plan their journeys with suitable vehicles, clear fare information, and reliable booking assistance.
              </p>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--dark-navy)' }}>Our Vision</h3>
              <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                To become a trusted travel partner for pilgrimage tours, family holidays, and outstation journeys.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Our Values</h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
            </div>
            
            <div className="grid grid-4 text-center">
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield size={32} color="var(--primary-orange)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Safety First</h3>
              </div>
              
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Heart size={32} color="var(--primary-orange)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Customer Care</h3>
              </div>
              
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ThumbsUp size={32} color="var(--primary-orange)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Comfort & Convenience</h3>
              </div>
              
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={32} color="var(--primary-orange)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Transparent Communication</h3>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '4rem', backgroundColor: 'var(--white)', textAlign: 'center', borderTop: '5px solid var(--primary-orange)' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Why Choose Us?</h2>
            <div className="grid grid-2 text-left" style={{ gap: '1.5rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold', fontSize: '1.25rem' }}>✓</div>
                <p style={{ color: 'var(--dark-navy)', fontSize: '1.125rem' }}>Vehicle options for different group sizes.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold', fontSize: '1.25rem' }}>✓</div>
                <p style={{ color: 'var(--dark-navy)', fontSize: '1.125rem' }}>Srisailam-focused travel packages.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold', fontSize: '1.25rem' }}>✓</div>
                <p style={{ color: 'var(--dark-navy)', fontSize: '1.125rem' }}>Pickup and drop-off arrangements.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold', fontSize: '1.25rem' }}>✓</div>
                <p style={{ color: 'var(--dark-navy)', fontSize: '1.125rem' }}>WhatsApp enquiry and booking assistance.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-orange)', fontWeight: 'bold', fontSize: '1.25rem' }}>✓</div>
                <p style={{ color: 'var(--dark-navy)', fontSize: '1.125rem' }}>Customizable travel itineraries.</p>
              </div>
            </div>
            
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
