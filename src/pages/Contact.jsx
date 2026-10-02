import React from 'react';
import ContactEnquiryForm from '../components/ContactEnquiryForm';
import { Phone, Mail, MapPin, Map } from 'lucide-react';
import { BUSINESS_NAME, BUSINESS_EMAIL, BUSINESS_ADDRESS, BUSINESS_SERVICE_AREA, WHATSAPP_NUMBER } from '../config';
import { useSEO } from '../hooks/useSEO';

const Contact = () => {
  useSEO(
    'Contact Us | Book Your Trip | Shiva Shakti Travels',
    'Get in touch with Shiva Shakti Travels to book your trip, customize a tour package, or inquire about vehicle availability.'
  );

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0 6rem',
        backgroundImage: 'linear-gradient(rgba(49, 48, 65, 0.6), rgba(49, 48, 65, 0.8)), url(/images/srisailam_dam.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <span className="font-cursive hero-subtitle">Reach out to us</span>
          <h1 className="hero-title">Let's Plan Your Journey</h1>
          <p className="hero-text">
            Tell us where you want to go, and our team can help you discuss your travel requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>Get in Touch</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
                Whether you need a one-day trip to Srisailam or a customized multi-day tour, we are here to help you plan your journey with comfort and convenience.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} color="var(--primary-orange)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-navy)' }}>Business Name</h3>
                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem' }}>{BUSINESS_NAME}</p>
                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem', marginTop: '0.25rem' }}>{BUSINESS_ADDRESS}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} color="var(--primary-orange)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-navy)' }}>Phone / WhatsApp</h3>
                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem' }}>+{WHATSAPP_NUMBER}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} color="var(--primary-orange)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-navy)' }}>Email</h3>
                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem' }}>{BUSINESS_EMAIL}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Map size={24} color="var(--primary-orange)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-navy)' }}>Service Area</h3>
                    <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem' }}>{BUSINESS_SERVICE_AREA}</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--light-orange)', borderRadius: '1rem', borderLeft: '4px solid var(--primary-orange)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-orange)' }}>Working Hours</h3>
                <p style={{ color: 'var(--dark-navy)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monday - Sunday:</span> <strong>24/7 Support for Bookings</strong>
                </p>
                <p style={{ color: 'var(--secondary-text)', fontSize: '0.875rem', marginTop: '1rem' }}>
                  * We recommend booking your trip at least 24-48 hours in advance for assured vehicle availability.
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <ContactEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
