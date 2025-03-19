// src/components/Hero.tsx
import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-image">
          {/* Replace with your actual image */}
          <img src="/images/hero-image.jpg" alt="Royal figure" />
        </div>
        <div className="hero-content">
          <h1>ROYAL <br />HEALTHCARE</h1>
          <p>
            Earn points with every healthcare decision and redeem 
            them for exclusive rewards. Experience healthcare fit 
            for royalty with Saint Daniels.
          </p>
          <button className="btn join-btn">JOIN THE KINGDOM</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// src/styles/Hero.css
.hero {
  background-color: var(--dark-green);
  color: var(--white);
  padding: var(--spacing-2xl) 0;
  border-bottom: 1px solid var(--gold);
}

.hero-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xl);
}

.hero-image {
  flex: 0 0 45%;
}

.hero-image img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: var(--radius-md);
}

.hero-content {
  flex: 0 0 50%;
}

.hero-content h1 {
  color: var(--gold);
  font-size: var(--font-4xl);
  margin-bottom: var(--spacing-xl);
  line-height: 1.1;
}

.hero-content p {
  font-size: var(--font-lg);
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
}

.join-btn {
  font-size: var(--font-md);
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
  }
  
  .hero-image, .hero-content {
    flex: 0 0 100%;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }
}
