import React from 'react';

const AttractionCard = ({ name, description, image }) => {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card-img-wrapper" style={{ height: '250px' }}>
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>{name} Image</div>
        )}
      </div>
      <div className="card-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{name}</h3>
        <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AttractionCard;
