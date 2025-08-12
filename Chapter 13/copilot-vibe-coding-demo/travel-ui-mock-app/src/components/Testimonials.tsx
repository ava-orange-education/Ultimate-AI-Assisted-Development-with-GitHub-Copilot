import React from 'react';

const testimonials = [
  { name: 'The Best Experience', icon: '😊', comment: 'Lorem ipsum dolor sit amet.' },
  { name: 'Great Experience', icon: '😃', comment: 'Lorem ipsum dolor sit amet.' },
];

const Testimonials = () => {
  return (
    <section className="p-6 border-t mt-6">
      <h3 className="text-lg font-semibold mb-4">Testimonials</h3>
      <div className="space-y-4">
        {testimonials.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="text-2xl">{item.icon}</div>
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-6 flex justify-between items-center text-sm text-gray-500">
        <div>Follow us</div>
        <div className="space-x-3">
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </section>
  );
};

export default Testimonials;
