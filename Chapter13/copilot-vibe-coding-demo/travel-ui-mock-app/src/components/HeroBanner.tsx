import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative">
      <img
        src="chapter13-best-practices-and-limitations\copilot-vibe-coding-demo\public\assets\ui-mock.jpg"
        alt="Scenic Travel Destination"
        className="w-full h-72 object-cover"
      />
      <div className="absolute top-8 left-6 text-white">
        <h2 className="text-2xl font-semibold">Seasonal PROMOTIONAL</h2>
        <p className="mt-1 text-sm max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
