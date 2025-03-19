// src/components/TreasureCard.tsx
import React from 'react';
import { TreasureCardProps } from '../types';
import '../styles/TreasureCard.css';

const TreasureCard: React.FC<TreasureCardProps> = ({ image, title, points, description }) => {
  return (
    <div className="treasure-card">
      <div className="treasure-image">
        <img src={image} alt={title} />
      </div>
      <div className="treasure-content">
        <h3>{title}</h3>
        <div className="points-badge">{points} Points</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TreasureCard;

// src/styles/TreasureCard.css
.treasure-card {
  background-color: var(--beige);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.treasure-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.treasure-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.treasure-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.treasure-card:hover .treasure-image img {
  transform: scale(1.05);
}

.treasure-content {
  padding: var(--spacing-lg);
}

.treasure-content h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--dark-green);
}

.points-badge {
  display: inline-block;
  background-color: var(--gold);
  color: var(--dark-green);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--font-sm);
  margin-bottom: var(--spacing-md);
}

.treasure-content p {
  color: var(--text-dark);
  font-size: var(--font-md);
}

// src/components/RoyalTreasures.tsx
import React from 'react';
import TreasureCard from './TreasureCard';
import '../styles/RoyalTreasures.css';

const RoyalTreasures: React.FC = () => {
  const treasures = [
    {
      image: '/images/gym-access.jpg',
      title: 'Premium Gym Access',
      points: 5000,
      description: 'Get access to premium gym facilities to support your fitness journey.'
    },
    {
      image: '/images/walgreens.jpg',
      title: '$5 Walgreens Gift Card',
      points: 500,
      description: 'Redeem your points for a Walgreens gift card to use on health and wellness products.'
    },
    {
      image: '/images/health-tech.jpg',
      title: 'Royal Health Tech',
      points: 2000,
      description: 'Premium health monitoring devices to keep track of your vital health metrics.'
    }
  ];

  return (
    <section className="section beige-bg" id="treasures">
      <div className="container">