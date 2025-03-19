// src/components/BenefitCard.tsx
import React from 'react';
import { BenefitCardProps } from '../types';
import '../styles/BenefitCard.css';

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;

// src/styles/BenefitCard.css
.benefit-card {
  background-color: var(--beige);
  padding: var(--spacing-xl);
  border-radius: var(--radius-md);
  text-align: center;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  margin-bottom: var(--spacing-lg);
}

.benefit-icon img {
  width: 64px;
  height: 64px;
}

.benefit-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--dark-green);
}

.benefit-card p {
  font-size: var(--font-md);
  color: var(--text-dark);
}
