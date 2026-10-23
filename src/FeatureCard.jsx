import React from 'react';

function FeatureCard({ title, description, icon: Icon, gradient, delay }) {
  return (
    <div
      className="feature-card-wrapper"
      style={{
        '--card-delay': `${delay}s`
      }}
    >
      <div className="feature-card-glow" style={{ background: gradient, filter: 'blur(45px)' }} />
      <div
        className="feature-card"
        style={{
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`
        }}
      >
        <div className="feature-card-inner">
          <div className="feature-card-icon">
            <Icon size={32} strokeWidth={2.5} />
          </div>
          <div className="feature-card-content">
            <h3 className="feature-card-title">{title}</h3>
            <p className="feature-card-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
