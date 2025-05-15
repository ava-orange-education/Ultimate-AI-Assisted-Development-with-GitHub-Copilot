import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
