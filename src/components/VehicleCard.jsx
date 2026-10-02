import React from 'react';
import { generateWhatsAppLink } from '../utils';

const VehicleCard = ({ name, seating, referencePrice, image }) => {
  const isNumeric = /\d/.test(referencePrice);
  const message = `Hello Shiva Shakti Travels! I am interested in booking a ${name}. Please confirm availability and the final tariff.`;
  const link = generateWhatsAppLink(message);

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card-img-wrapper" style={{ height: '200px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--light-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-orange)', fontWeight: '500' }}>{name} Image</div>
        )}
      </div>
      <div className="card-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>{name}</h3>
        <p style={{ color: 'var(--secondary-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontWeight: '500', color: 'var(--dark-navy)' }}>Seating Capacity:</span> {seating}
        </p>
        <p style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
          {isNumeric ? `Starting at ${referencePrice}*` : referencePrice}
        </p>
        <div style={{ marginTop: 'auto' }}>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', padding: '0.75rem 1rem' }}>
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
