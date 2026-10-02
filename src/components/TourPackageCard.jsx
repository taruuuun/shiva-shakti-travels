import React from 'react';
import { generateWhatsAppLink } from '../utils';

const TourPackageCard = ({ title, features, ctaText, whatsappMessage }) => {
  const link = generateWhatsAppLink(whatsappMessage);

  return (
    <div className="card" style={{ border: '2px solid var(--light-orange)' }}>
      <div className="card-content" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-orange)', marginBottom: '1.5rem' }}>{title}</h3>
        <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {features.map((feature, index) => (
            <li key={index} style={{ display: 'flex', gap: '0.5rem', color: 'var(--secondary-text)' }}>
              <span style={{ color: 'var(--accent-saffron)' }}>✓</span> {feature}
            </li>
          ))}
        </ul>
        <div style={{ padding: '1rem', backgroundColor: 'var(--main-bg)', borderRadius: '0.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontWeight: '600', color: 'var(--dark-navy)' }}>Ask for Price</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
          {ctaText || 'Enquire on WhatsApp'}
        </a>
      </div>
    </div>
  );
};

export default TourPackageCard;
