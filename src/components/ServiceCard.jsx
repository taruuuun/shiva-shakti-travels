import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, linkTo, icon }) => {
  return (
    <div className="card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--light-orange)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary-orange)' }}>
        {icon || <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--primary-orange)', borderRadius: '50%' }}></div>}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', flexGrow: 1 }}>
        {description}
      </p>
      {linkTo && (
        <Link to={linkTo} className="btn btn-outline" style={{ marginTop: 'auto' }}>
          Explore
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
