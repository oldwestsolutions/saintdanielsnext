// src/components/Testimonials.tsx
import React from 'react';
import { TestimonialProps } from '../types';
import '../styles/Testimonials.css';

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, since, avatar }) => {
  return (
    <div className="testimonial">
      <div className="quote-marks">&ldquo;</div>
      <p className="quote-text">{quote}</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="author-info">
          <h4>{name}</h4>
          <p>{title}<br />Member since {since}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Saint Daniels has transformed how I approach my healthcare. The rewards program motivates me to stay on top of my health, and the benefits I've received have been truly exceptional. I feel like royalty every time I use my points!",
      name: "Elizabeth W.",
      title: "",
      since: "2023",
      avatar: "/images/elizabeth-avatar.jpg"
    }
    // Add more testimonials as needed
  ];

  return (
    <section className="section beige-bg" id="testimonials">
      <div className="container">
        <h2 className="section-title">ROYAL ACCLAIM</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              since={testimonial.since}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// src/styles/Testimonials.css
.testimonials-container {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial {
  background-color: var(--white);
  border-radius: var(--radius-md);
  padding: var(--spacing-xl);
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.quote-marks {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 60px;
  color: rgba(0, 0, 0, 0.1);
  font-family: Georgia, serif;
  line-height: 1;
}

.quote-text {
  font-style: italic;
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  padding-left: var(--spacing-lg);
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--spacing-md);
  border: 2px solid var(--gold);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  margin-bottom: 0;
  font-size: var(--font-md);
}

.author-info p {
  font-size: var(--font-sm);
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 0;
}
