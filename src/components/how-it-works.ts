// src/components/HowItWorks.tsx
import React from 'react';
import { StepProps } from '../types';
import '../styles/HowItWorks.css';

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Join The Kingdom',
      description: 'Register for a Saint Daniels account and link your healthcare providers.'
    },
    {
      number: 2,
      title: 'Earn Royal Points',
      description: 'Collect points for healthcare visits, wellness activities, and healthy choices.'
    },
    {
      number: 3,
      title: 'Claim Your Treasures',
      description: 'Redeem your points for healthcare rewards and exclusive benefits.'
    }
  ];

  return (
    <section className="section beige-bg" id="how-it-works">
      <div className="container">
        <h2 className="section-title">ROYAL DECREE: HOW IT WORKS</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

// src/styles/HowItWorks.css
.beige-bg {
  background-color: var(--beige);
}

.steps-container {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-xl);
  margin: 0 auto;
  max-width: 1000px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.step-number {
  background-color: var(--dark-green);
  color: var(--white);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  border: 2px solid var(--gold);
}

.step-content h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--dark-green);
}

.step-content p {
  color: var(--text-dark);
}

@media (max-width: 768px) {
  .steps-container {
    flex-direction: column;
  }
  
  .step {
    margin-bottom: var(--spacing-xl);
  }
}
