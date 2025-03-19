import React from 'react';
import Header from '../src/components/header-footer';
import Hero from '../src/components/Hero';
import RoyalBenefits from '../src/components/royal-benefits';
import Testimonials from '../src/components/testimonials';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <RoyalBenefits />
      <Testimonials />
    </div>
  );
} 