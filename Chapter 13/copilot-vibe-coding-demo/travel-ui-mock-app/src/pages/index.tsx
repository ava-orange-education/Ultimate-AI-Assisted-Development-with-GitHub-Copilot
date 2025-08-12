import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <HeroBanner />
        <Services />
        <Destinations />
        <Testimonials />
      </main>
    </div>
  );
}
