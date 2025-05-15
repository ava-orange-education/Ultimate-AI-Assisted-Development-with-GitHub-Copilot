import React from 'react';

const services = [
  { title: 'Connective', icon: '📶', desc: 'Lorem ipsum dolor sit amet.' },
  { title: 'The Best Way', icon: '🚆', desc: 'Lorem ipsum dolor sit amet.' },
  { title: 'Save Money', icon: '💰', desc: 'Lorem ipsum dolor sit amet.' },
];

const Services = () => {
  return (
    <section className="p-6">
      <h3 className="text-lg text-orange-600 font-semibold">BEST SERVICES</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="text-3xl mb-2">{service.icon}</div>
            <h4 className="font-bold text-md">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
