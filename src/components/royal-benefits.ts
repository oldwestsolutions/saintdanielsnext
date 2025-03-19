// src/components/RoyalBenefits.tsx
import React from 'react';
import BenefitCard from './BenefitCard';
import '../styles/RoyalBenefits.css';

const RoyalBenefits: React.FC = () => {
  const benefits = [
    {
      icon: '/images/treasure-icon.png',
      title: 'Premium Rewards',
      description: 'Unlock exclusive healthcare services, products, and experiences with your earned points.'
    },
    {
      icon: '/images/crown-icon.png',
      title: 'Royal Treatment',
      description: 'Priority scheduling, personalized care plans, and VIP healthcare experiences await you.'
    },
    {
      icon: '/images/hearts-icon.png',
      title: 'Wellness Incentives',
      description: 'Earn rewards for maintaining your health and wellness goals. Our program encourages and celebrates your commitment to a healthier lifestyle.'
    }
  ];

  return (
    <section className="section" id="benefits">
      <div className="container">
        <h2 className="section-title">ROYAL BENEFITS</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoyalBenefits;

// src/styles/RoyalBenefits.css
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 992px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
