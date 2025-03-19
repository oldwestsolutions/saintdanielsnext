// src/components/CallToAction.tsx
import React from 'react';
import '../styles/CallToAction.css';

const CallToAction: React.FC = () => {
  return (
    <section className="cta-section green-bg">
      <div className="container">
        <h2>JOIN THE HEALTHCARE KINGDOM</h2>
        <p>
          Take control of your healthcare journey with rewards fit for royalty. 
          Sign up today and begin earning points towards a healthier, more rewarding future.
        </p>
        <button className="btn cta-btn">BEGIN YOUR ROYAL JOURNEY</button>
      </div>
    </section>
  );
};

export default CallToAction;

// src/styles/CallToAction.css
.cta-section {
  padding: var(--spacing-3xl) 0;
  text-align: center;
}

.cta-section h2 {
  color: var(--gold);
  font-size: var(--font-3xl);
  margin-bottom: var(--spacing-lg);
}

.cta-section p {
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
  font-size: var(--font-lg);
}

.cta-btn {
  font-size: var(--font-md);
  padding: var(--spacing-md) var(--spacing-2xl);
}
