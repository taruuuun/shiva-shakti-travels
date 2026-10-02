import React from 'react';
import { generateWhatsAppLink } from '../utils';

const TripPricingCard = ({ destination, image, dzirePrice, ertigaPrice }) => {
  const message = `Hello Shiva Shakti Travels! I am interested in the trip to ${destination}. Please confirm availability and the final quotation.`;
  const link = generateWhatsAppLink(message);

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card-img-wrapper" style={{ height: '220px', position: 'relative' }}>
        <img src={image} alt={destination} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
            <h3 style={{ fontSize: '1.75rem', margin: 0, color: 'var(--white)', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{destination}</h3>
        </div>
      </div>
      <div className="card-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', paddingTop: '1rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px dashed #E5E7EB', alignItems: 'center' }}>
          <div>
            <span style={{ fontWeight: '600', display: 'block', color: 'var(--dark-navy)' }}>Swift Dzire</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--secondary-text)' }}>4+1 Seater</span>
          </div>
          <span style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.25rem', backgroundColor: 'var(--light-orange)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{dzirePrice}/-</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', marginBottom: '1.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontWeight: '600', display: 'block', color: 'var(--dark-navy)' }}>Ertiga Vehicle</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--secondary-text)' }}>6+1 Seater</span>
          </div>
          <span style={{ color: 'var(--primary-orange)', fontWeight: '700', fontSize: '1.25rem', backgroundColor: 'var(--light-orange)', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{ertigaPrice}/-</span>
        </div>
        
        <div style={{ marginTop: 'auto' }}>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>
            Book {destination} Trip
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripPricingCard;
