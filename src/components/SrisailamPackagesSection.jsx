import React from 'react';
import { generateWhatsAppLink } from '../utils';

const SrisailamPackagesSection = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container" data-aos="fade-up">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-orange)', marginBottom: '1rem' }}>
            Daily Tour Packages for Srisailam From Hyderabad.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--dark-navy)' }}>
            Packages are Classified Below.
          </p>
        </div>

        {/* Schedule Table */}
        <div style={{ maxWidth: '900px', margin: '0 auto 2rem', overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            textAlign: 'center',
            border: '1px solid #d1d5db',
            marginBottom: '2rem'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6', color: 'var(--dark-navy)' }}>
                <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>Tour Type</th>
                <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>Start Time</th>
                <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>Return To Hyderabad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem', border: '1px solid #d1d5db', color: 'var(--secondary-text)' }}>1 Day</td>
                <td style={{ padding: '1rem', border: '1px solid #d1d5db', color: 'var(--secondary-text)' }}>04 AM - 06 AM</td>
                <td style={{ padding: '1rem', border: '1px solid #d1d5db', color: 'var(--secondary-text)' }}>08 PM - 09 PM</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', border: '1px solid #d1d5db', color: 'var(--secondary-text)' }}>2 Days 1 Night</td>
                <td style={{ padding: '1rem', border: '1px solid #d1d5db', color: 'var(--secondary-text)' }}>Day 1 After 06 AM Any Time</td>
                <td style={{ padding: '1rem', border: '1px solid #d1d5db', color: 'var(--secondary-text)' }}>Day 2 By 08 PM - 09 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--secondary-text)', fontSize: '1.125rem', lineHeight: '1.6' }}>
            We Provide All Types of Car for your Trip from All Locations in Hyderabad From Home Pickup, Hotels, Railway Station & Hyderabad Airport . AC Will be off in Hilly areas
          </p>
        </div>

        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            color: 'white', 
            display: 'inline-block', 
            padding: '0.75rem 2rem',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            Hyderabad to Srisailam Fare Details
          </div>
        </div>

        {/* Vehicle Pricing Grid */}
        <div className="grid grid-3" style={{ maxWidth: '1100px', margin: '0 auto', gap: '2rem' }}>
          {/* Sedan */}
          <div className="card text-center" style={{ padding: '2rem', border: '1px solid #e5e7eb', boxShadow: 'none' }}>
            <img src="/images/swift.png" alt="Sedan 4 Seater" style={{ height: '120px', objectFit: 'contain', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>Sedan (4 Seater)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>One Day Tour :- </span>
                <span style={{ color: '#4b5563', fontWeight: '500' }}>7500/-</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>2 Days 1 Night :- </span>
                <span style={{ color: '#4b5563', fontWeight: '500' }}>9500/-</span>
              </div>
            </div>
            <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to book a Sedan (4 Seater) for Srisailam trip.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Book Now</a>
          </div>

          {/* SUV Innova */}
          <div className="card text-center" style={{ padding: '2rem', border: '1px solid #e5e7eb', boxShadow: 'none' }}>
            <img src="/images/maruti.webp" alt="SUV Innova 7 Seater" style={{ height: '120px', objectFit: 'contain', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>SUV Innova (7 Seater)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>One Day Tour :- </span>
                <span style={{ color: '#4b5563', fontWeight: '500' }}>11500/-</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>2 Days 1 Night :- </span>
                <span style={{ color: '#4b5563', fontWeight: '500' }}>13500/-</span>
              </div>
            </div>
            <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to book an SUV Innova (7 Seater) for Srisailam trip.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Book Now</a>
          </div>

          {/* SUV Innova Crysta */}
          <div className="card text-center" style={{ padding: '2rem', border: '1px solid #e5e7eb', boxShadow: 'none' }}>
            <img src="/images/innova.png" alt="SUV + Innova Crysta 7 Seater" style={{ height: '120px', objectFit: 'contain', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--dark-navy)' }}>SUV + Innova Crysta (7 Seater)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>One Day Tour :- </span>
                <span style={{ color: '#4b5563', fontWeight: '500' }}>13500/-</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>2 Days 1 Night :- </span>
                <span style={{ color: '#4b5563', fontWeight: '500' }}>15500/-</span>
              </div>
            </div>
            <a href={generateWhatsAppLink("Hello Shiva Shakti Travels! I want to book an Innova Crysta (7 Seater) for Srisailam trip.")} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SrisailamPackagesSection;
